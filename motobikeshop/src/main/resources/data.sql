

INSERT INTO Store (store_id, store_name, address, city, district, hot_line, images, open_time, close_time,latitude, longitude, outstanding)
VALUES (1, 'Cua hang 1','102 dang van bi','TP.HCM','TP.ThuDuc','0375242475', 'images/test','8:00 AM','9:00 PM','','',1),
       (2, 'Cua hang 2','102 dang van bi','TP.HCM','TP.ThuDuc','0375242475', 'images/test','8:00 AM','9:00 PM','','',0);

INSERT INTO Account (user_name, password, email, phone_number, address, created_Date, permissions)
VALUES ('danhhoc', '1234','danghoc@gmail.com','0375242475','TP.ThuDuc','2022-06-28', 'admin' ),
       ('thanghoang', '1234','thanghoang@gmail.com','0375242475','TP.HCM','2022-06-28', 'admin' );