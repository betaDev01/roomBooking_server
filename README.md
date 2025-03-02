# Hotel Booking API

## 📌 Overview

A Node.js-based RESTful API for hotel booking with CRUD operations. Users can book hotels based on location, check-in and check-out dates, number of guests, and rooms, and retrieve a list of all bookings.

## 🛠 Technologies Used

Node.js

Express.js

TypeScript

Routing Controllers

PostgreSQL (Docker container)


## 🚀 Getting Started

✅ Prerequisites

Ensure you have the following installed:

Node.js

Docker

## 🏗 Setting Up the Database

Run the following command to start a PostgreSQL database in a Docker container:

```docker run --name postgressDB -p 5432:5432 -e POSTGRES_PASSWORD=root -d postgres```

## 📦 Installation

Clone the repository and install dependencies:

```git clone https://github.com/betaDev01/roomBooking_server.git```

```cd roomBooking_server```

```npm install```


## Database Migration

A migration query has been attached to create the necessary database tables and insert hotel-related data. Ensure you run the migration script before starting the backend service.

```sh 
File name: manualQuery
```

## ▶️ Running the Application

```npm start```

## 🔗 API Endpoints

Booking Operations CURL

Health Check
```sh
curl --location 'localhost:4000/health'
```

Get Hotels List
```sh
curl --location 'http://localhost:4000/list' \
--header 'Accept: application/json' \
--header 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpdmFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE3NDA5MjA1NzZ9.AnZhiYnNYb8zVbKpNI3VqeOo1IO2QrLoTfky3VXDsOc' \
--header 'Cache-Control: no-cache' \
--header 'Connection: keep-alive' \
--header 'Origin: http://localhost:3000' \
--header 'Pragma: no-cache' \
--header 'Referer: http://localhost:3000/' \
--header 'Sec-Fetch-Dest: empty' \
--header 'Sec-Fetch-Mode: cors' \
--header 'Sec-Fetch-Site: same-site' \
--header 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36' \
--header 'sec-ch-ua: "Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"' \
--header 'sec-ch-ua-mobile: ?0' \
--header 'sec-ch-ua-platform: "Linux"'
```

Create/Update Booking
```sh
curl 'http://localhost:4000/modify' \
  -H 'Accept: application/json' \
  -H 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7' \
  -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpdmFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE3NDA5MjA1NzZ9.AnZhiYnNYb8zVbKpNI3VqeOo1IO2QrLoTfky3VXDsOc' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:3000' \
  -H 'Referer: http://localhost:3000/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  --data-raw '{"action":"booked","checkInDate":"2025-03-02T18:30:00.000Z","checkOutDate":"2025-03-30T18:30:00.000Z","guests":11,"roomsBooked":11,"hotelId":"1b0fb446-7fcb-4834-a943-d15a3f3b5e1a"}'
```
Delete Booking
```sh
curl 'http://localhost:4000/delete?bookingId=f3740c13-3d00-4b2f-94fd-577c80d291da' \
  -X 'DELETE' \
  -H 'Accept: application/json' \
  -H 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7' \
  -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpdmFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE3NDA5MjA1NzZ9.AnZhiYnNYb8zVbKpNI3VqeOo1IO2QrLoTfky3VXDsOc' \
  -H 'Connection: keep-alive' \
  -H 'Origin: http://localhost:3000' \
  -H 'Referer: http://localhost:3000/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"'
  ```
