# 🌍 Smart Environment Monitoring System 🌍

<p align="center">
  <img src="https://img.shields.io/badge/ESP32-IoT-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/MQTT-Realtime-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/Python-Backend-success?style=for-the-badge&logo=python">
  <img src="https://img.shields.io/badge/Grafana-Dashboard-F46800?style=for-the-badge&logo=grafana">
</p>

<p align="center">
  📡 Hệ thống giám sát môi trường thông minh kết hợp Embedded Systems, IoT và Dashboard Realtime.
</p>

---

# 📖 Giới thiệu

**Smart Environment Monitoring System** là một hệ thống IoT mô phỏng môi trường thông minh phục vụ học tập, nghiên cứu và phát triển các ứng dụng Embedded/IoT thực tế.

Project tích hợp:

- 🌡 Giám sát nhiệt độ thời gian thực
- 💧 Theo dõi độ ẩm đất
- 🚨 Cảnh báo rò rỉ khí gas
- ⚡ Giám sát điện năng tiêu thụ
- 💡 Điều khiển thiết bị từ xa
- 📊 Dashboard realtime
- ☁ Cloud IoT & MQTT Communication

Hệ thống phù hợp cho:

- Embedded Systems
- IoT Development
- Firmware Engineering
- Dashboard Monitoring
- Smart Home
- Smart Agriculture

---

# 🏗 Kiến trúc hệ thống

```text
[ Sensor Node ESP32 ]
        │
        ▼
   MQTT Broker
        │
        ▼
 Backend API (Python)
        │
        ▼
Database + Dashboard
        │
        ▼
 Web / Mobile Monitoring
```

---

# ⚙️ Chức năng chính

## 📌 Environmental Monitoring
- Đọc dữ liệu cảm biến từ ESP32
- Dashboard nhiệt độ realtime
- Giám sát độ ẩm đất thông minh
- Hệ thống cảnh báo gas IoT

## 📌 Smart Communication
- MQTT chat giữa 2 thiết bị
- Gửi dữ liệu lên ThingSpeak
- Web server cho ESP32

## 📌 Smart Home Control
- Điều khiển LED qua Web
- Smart home điều khiển relay
- Hệ thống giám sát điện năng tiêu thụ

## 📌 Visualization & Simulation
- Dashboard realtime
- Digital twin cho hệ IoT
- Biểu đồ và phân tích dữ liệu

---

# 🛠 Công nghệ sử dụng

| Công nghệ | Vai trò |
|---|---|
| ESP32 | Vi điều khiển IoT |
| MQTT | Giao tiếp realtime |
| Python | Backend & xử lý dữ liệu |
| Flask / FastAPI | API Server |
| React / Vue | Frontend Dashboard |
| InfluxDB | Time-series Database |
| Grafana | Data Visualization |
| ThingSpeak | Cloud IoT Platform |

---

# 📂 Cấu trúc Project

```bash
smart-environment-monitoring-system/
│
├── esp32/
│   ├── sensor_node/
│   ├── relay_control/
│   └── mqtt_client/
│
├── backend/
│   ├── api/
│   ├── mqtt_service/
│   └── database/
│
├── dashboard/
│   ├── frontend/
│   └── charts/
│
├── digital_twin/
│
├── docs/
│
└── README.md
```

---

# 📊 Dashboard Features

- 📈 Realtime sensor charts
- 🚨 Alert notification system
- ⚡ Power consumption analytics
- 🌡 Temperature & humidity monitoring
- 🏠 Smart device control panel

---

# 🧠 Kiến thức áp dụng

Project sử dụng các kiến thức:

- Embedded Systems
- Internet of Things (IoT)
- MQTT Protocol
- Sensor Integration
- Cloud IoT
- Edge Computing
- Data Visualization
- Fullstack Development

---

# 🚀 Hướng phát triển

## 📌 AI & Smart Analytics
- AI dự đoán tiêu thụ điện
- AI phát hiện bất thường cảm biến
- Smart energy optimization

## 📌 Edge AI
- TinyML trên ESP32
- Edge inference realtime
- AI cảnh báo tại thiết bị

## 📌 Cloud IoT
- Firebase / AWS IoT
- Remote monitoring
- Multi-device synchronization

---

# 🎯 Mục tiêu dự án

- Xây dựng hệ thống IoT thực tế
- Kết hợp Embedded + Dashboard + Cloud
- Phát triển kỹ năng firmware & backend
- Chuẩn bị cho thực tập Embedded/IoT/Firmware

---

# ▶️ Hướng dẫn chạy project

## Clone repository

```bash
git clone https://github.com/your-username/smart-environment-monitoring-system.git
```

## Chạy backend

```bash
python app.py
```

## Chạy frontend

```bash
npm install
npm run dev
```

## Nạp code ESP32

```bash
Arduino IDE / PlatformIO
```

---

# 📸 Điểm nổi bật

✨ Dashboard realtime hiện đại  
✨ Kiến trúc IoT hoàn chỉnh  
✨ Hỗ trợ MQTT communication  
✨ Tích hợp Embedded + Cloud + AI  
✨ Phù hợp portfolio thực tập kỹ thuật

---

# 👨‍💻 Author

**Nguyễn Ngọc Hùng**  
Sinh viên Điện tử Viễn thông – IUH

---

# ⭐ Support

Nếu project hữu ích, hãy để lại một ⭐ cho repository.

---

<p align="center">
  Made with ❤️ using ESP32 • MQTT • Python • Grafana
</p>
