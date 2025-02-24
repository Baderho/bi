<?php
// إعداد الاتصال بقاعدة البيانات 
$servername = "localhost";
$username = "your_username"; // استبدل باسم المستخدم الخاص بك
$password = "your_password"; // استبدل كلمة المرور الخاصة بك
$dbname = "inventory_db";    // استبدل باسم قاعدة البيانات الخاصة بك

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("فشل الاتصال: " . $conn->connect_error);
}

// تنفيذ العمليات إذا تم إرسال قيمة للمتغير action
if (isset($_GET['action'])) {
    $action = $_GET['action'];
    
    // جلب البيانات
    if ($action == 'get') {
        $sql = "SELECT * FROM inventory ORDER BY date DESC";
        $result = $conn->query($sql);
        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        $conn->close();
        echo json_encode($data);
        exit();
    }
    
    // إضافة أو تحديث سجل المادة
    else if ($action == 'update') {
        $material = $_POST['material'];
        $internalStock = (int)$_POST['internalStock'];
        $externalStock = (int)$_POST['externalStock'];
        $totalStock = (int)$_POST['totalStock'];
        $date = $_POST['date'];
        $notes = $_POST['notes'];
        
        // التحقق مما إذا كانت المادة موجودة
        $sql = "SELECT * FROM inventory WHERE material = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $material);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {
            // تحديث السجل
            $sqlUpdate = "UPDATE inventory SET internalStock = ?, externalStock = ?, totalStock = ?, date = ?, notes = ? WHERE material = ?";
            $stmtUpdate = $conn->prepare($sqlUpdate);
            $stmtUpdate->bind_param("iissss", $internalStock, $externalStock, $totalStock, $date, $notes, $material);
            if ($stmtUpdate->execute()) {
                echo "تم تحديث السجل";
            } else {
                echo "خطأ في تحديث السجل";
            }
        } else {
            // إضافة سجل جديد
            $sqlInsert = "INSERT INTO inventory (material, internalStock, externalStock, totalStock, date, notes) VALUES (?, ?, ?, ?, ?, ?)";
            $stmtInsert = $conn->prepare($sqlInsert);
            $stmtInsert->bind_param("siiiss", $material, $internalStock, $externalStock, $totalStock, $date, $notes);
            if ($stmtInsert->execute()) {
                echo "تم إضافة السجل";
            } else {
                echo "خطأ في إضافة السجل";
            }
        }
        $conn->close();
        exit();
    }
    
    // حذف سجل المادة
    else if ($action == 'delete') {
        $material = $_POST['material'];
        $sql = "DELETE FROM inventory WHERE material = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $material);
        if ($stmt->execute()) {
            echo "تم حذف السجل";
        } else {
            echo "خطأ في حذف السجل";
        }
        $conn->close();
        exit();
    }
}
?>

<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>نظام جرد المواد الكيميائية</title>
  <!-- Bootstrap CSS -->
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <!-- Font Awesome -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
  <style>
      body {
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          text-align: right;
          background-color: #f4f6f9;
          margin: 0;
          padding: 20px;
      }
      .container {
          width: 80%;
          margin: auto;
          background: #ffffff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      }
      h2 {
          text-align: center;
          color: #333;
          font-size: 24px;
          margin-bottom: 20px;
      }
      table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
      }
      th, td {
          border: 1px solid #ddd;
          padding: 12px;
          text-align: center;
      }
      th {
          background: #007bff;
          color: white;
          font-size: 16px;
      }
      select, input, button {
          padding: 12px;
          margin: 8px 0;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 16px;
          width: 100%;
      }
      button {
          background: #28a745;
          color: white;
          cursor: pointer;
          font-weight: bold;
          transition: background 0.3s;
      }
      button:hover {
          background: #218838;
      }
      .summary-table {
          margin-top: 30px;
          font-weight: bold;
          text-align: center;
          background: #f8f9fa;
          border-radius: 8px;
          padding: 15px;
      }
      .hidden {
          display: none;
      }
  </style>
</head>
<body>
  <div class="container">
      <h2>نظام جرد المواد الكيميائية</h2>
      <div class="form-group">
          <label>اختر المادة:</label>
          <select id="materialSelect" class="form-control">
              <option value="">-- اختر المادة --</option>
              <option value="Mousse FORT">Mousse FORT</option>
              <option value="Clean Pot">Clean Pot</option>
              <option value="PROACID">PROACID</option>
              <option value="HANDY PREP">HANDY PREP</option>
              <option value="cream clean">cream clean</option>
              <option value="Duromax">Duromax</option>
              <option value="Hypo Bleach">Hypo Bleach</option>
              <option value="No Streak RTU">No Streak RTU</option>
              <option value="FLOORESH">FLOORESH</option>
              <option value="GX2">GX2</option>
              <option value="Aqua Soul">Aqua Soul</option>
              <option value="Hand Roll">Hand Roll</option>
              <option value="Thinner">Thinner</option>
              <option value="Stark">Stark</option>
              <option value="Sanitol">Sanitol</option>
              <option value="Gx6">Gx6</option>
              <option value="addNew">+ إضافة مادة جديدة</option>
          </select>
      </div>
      <div class="form-group hidden" id="newMaterialGroup">
          <input type="text" id="newMaterial" placeholder="إضافة مادة جديدة" class="form-control">
          <button onclick="addMaterial()" class="btn btn-success mt-2" id="addMaterialBtn"><i class="fas fa-plus"></i> إضافة</button>
      </div>
      <div class="form-group">
          <label>الكمية في المخزن الداخلي:</label>
          <input type="number" id="internalStock" class="form-control" value="0">
      </div>
      <div class="form-group">
          <label>الكمية في المخزن الخارجي:</label>
          <input type="number" id="externalStock" class="form-control" value="0">
      </div>
      <div class="form-group">
          <label>ملاحظات:</label>
          <input type="text" id="notes" class="form-control" placeholder="اكتب الملاحظات هنا">
      </div>
      <button onclick="updateStock()" class="btn btn-primary"><i class="fas fa-sync"></i> تحديث الجرد</button>
      <table class="table table-bordered mt-4">
          <thead class="thead-dark">
              <tr>
                  <th>المادة</th>
                  <th>المخزن الداخلي</th>
                  <th>المخزن الخارجي</th>
                  <th>المجموع الكلي</th>
                  <th>تاريخ ووقت الإضافة</th>
                  <th>ملاحظات</th>
                  <th>حذف</th>
              </tr>
          </thead>
          <tbody id="inventoryTable"></tbody>
      </table>
      <div class="summary-table">
          <h3>ملخص الكميات</h3>
          <table class="table table-bordered">
              <thead class="thead-dark">
                  <tr>
                      <th>إجمالي المخزن الداخلي</th>
                      <th>إجمالي المخزن الخارجي</th>
                      <th>الإجمالي الكلي</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td id="totalInternal">0</td>
                      <td id="totalExternal">0</td>
                      <td id="totalStock">0</td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>

  <!-- jQuery and Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script>
      // عند تحميل الصفحة يتم جلب البيانات من السيرفر
      $(document).ready(function(){
          loadInventory();
      });

      document.getElementById('materialSelect').addEventListener('change', function() {
          if (this.value === 'addNew') {
              document.getElementById('newMaterialGroup').classList.remove('hidden');
          } else {
              document.getElementById('newMaterialGroup').classList.add('hidden');
          }
      });

      function addMaterial() {
          const newMaterial = document.getElementById('newMaterial').value;
          if (newMaterial) {
              const select = document.getElementById('materialSelect');
              const option = document.createElement('option');
              option.value = newMaterial;
              option.text = newMaterial;
              select.add(option);
              select.value = newMaterial;
              document.getElementById('newMaterialGroup').classList.add('hidden');
              document.getElementById('newMaterial').value = '';
              alert('تمت إضافة المادة بنجاح!');
          } else {
              alert('يرجى إدخال اسم المادة!');
          }
      }

      function updateStock() {
          const material = document.getElementById('materialSelect').value;
          const internalStock = parseInt(document.getElementById('internalStock').value);
          const externalStock = parseInt(document.getElementById('externalStock').value);
          const notes = document.getElementById('notes').value;
          const totalStock = internalStock + externalStock;
          const date = new Date().toLocaleString();

          if (!material) {
              alert('يرجى اختيار مادة!');
              return;
          }

          $.ajax({
              url: 'index.php?action=update',
              method: 'POST',
              data: {
                  material: material,
                  internalStock: internalStock,
                  externalStock: externalStock,
                  totalStock: totalStock,
                  date: date,
                  notes: notes
              },
              success: function(response) {
                  console.log(response);
                  loadInventory();
              },
              error: function(xhr, status, error) {
                  console.error(error);
              }
          });
      }

      function loadInventory() {
          $.ajax({
              url: 'index.php?action=get',
              method: 'GET',
              dataType: 'json',
              success: function(data) {
                  const table = document.getElementById('inventoryTable');
                  table.innerHTML = "";
                  data.forEach(function(item) {
                      const row = table.insertRow(0);
                      row.innerHTML = `<td>${item.material}</td>
                                       <td>${item.internalStock}</td>
                                       <td>${item.externalStock}</td>
                                       <td>${item.totalStock}</td>
                                       <td>${item.date}</td>
                                       <td>${item.notes}</td>
                                       <td><button class="btn btn-danger" onclick="deleteItem('${item.material}')"><i class="fas fa-trash-alt"></i> حذف</button></td>`;
                  });
                  updateSummary();
              },
              error: function(xhr, status, error) {
                  console.error(error);
              }
          });
      }

      function deleteItem(material) {
          $.ajax({
              url: 'index.php?action=delete',
              method: 'POST',
              data: { material: material },
              success: function(response) {
                  console.log(response);
                  loadInventory();
              },
              error: function(xhr, status, error) {
                  console.error(error);
              }
          });
      }

      function updateSummary() {
          let totalInternal = 0;
          let totalExternal = 0;
          const rows = document.querySelectorAll('#inventoryTable tr');
          rows.forEach(row => {
              totalInternal += parseInt(row.cells[1].textContent);
              totalExternal += parseInt(row.cells[2].textContent);
          });
          document.getElementById('totalInternal').textContent = totalInternal;
          document.getElementById('totalExternal').textContent = totalExternal;
          document.getElementById('totalStock').textContent = totalInternal + totalExternal;
      }
  </script>
</body>
</html>
