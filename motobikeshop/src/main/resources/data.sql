

INSERT INTO Store (store_id, store_name, address, city, district, hot_line, images, open_time, close_time,latitude, longitude, outstanding)
VALUES (1, 'Cua hang 1','102 dang van bi','TP.HCM','TP.ThuDuc','0375242475', 'images/test','8:00 AM','9:00 PM','','',1),
       (2, 'Cua hang 2','102 dang van bi','TP.HCM','TP.ThuDuc','0375242475', 'images/test','8:00 AM','9:00 PM','','',0);

INSERT INTO user (user_name, password, email, phone_number, address, created_Date, permissions)
VALUES ('danhhoc', '$2a$12$ttuGa4fp6d61b8E5BQGIke1Ci1QuOtniXm7EVoHWjR05FpQEG44we','danghoc@gmail.com','0375242475','TP.ThuDuc','2022-06-28', 'admin' ),
       ('thanghoang', '$2a$12$ttuGa4fp6d61b8E5BQGIke1Ci1QuOtniXm7EVoHWjR05FpQEG44we','thanghoang@gmail.com','123456789','TP.HCM','2022-06-28', 'admin' );


INSERT INTO Product (product_id, name, price, quantity, thumbnail, detail_Image, description, height, origin)
VALUES (1, 'vision ',60000000,5,'','', '','80','honda'),
       (2, 'SH ',160000000,5,'','', '','88','honda');
