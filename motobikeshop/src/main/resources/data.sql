INSERT INTO Store (store_id, store_name, address, city, district, hot_line, images, open_time, close_time,latitude, longitude, outstanding)
VALUES (1, 'Cua hang 1','102 dang van bi','TP.HCM','TP.ThuDuc','0375242475', 'images/test','8:00 AM','9:00 PM','','',1),
       (2, 'Cua hang 2','102 dang van bi','TP.HCM','TP.ThuDuc','0375242475', 'images/test','8:00 AM','9:00 PM','','',0);

INSERT INTO user (user_name, password, email, phone_number, address, created_Date, permissions)
VALUES ('danhhoc', '$2a$12$ttuGa4fp6d61b8E5BQGIke1Ci1QuOtniXm7EVoHWjR05FpQEG44we','danghoc@gmail.com','0375242475','TP.ThuDuc','2022-06-28', 'admin' ),
       ('thanghoang', '$2a$12$ttuGa4fp6d61b8E5BQGIke1Ci1QuOtniXm7EVoHWjR05FpQEG44we','thanghoang@gmail.com','123456789','TP.HCM','2022-06-28', 'admin' ),
       ('user', '$2a$12$ttuGa4fp6d61b8E5BQGIke1Ci1QuOtniXm7EVoHWjR05FpQEG44we','thanghoang6@gmail.com','0909090999','TP.HCM','2022-06-28', 'user' );

INSERT INTO Product (product_id, name, price, quantity, thumbnail, detail_Image, description, height, origin)
VALUES (1, 'CB1000R 2021',510000000,10,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','https://cdn.honda.com.vn/motorbike-versions/December2021/XKBSyoqK3rwzkxDt64MZ.png', 'Thông số kĩ thuật','80','honda'),
       (2, 'SH ',160000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','88','honda'),
       (3, 'vision ',60000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','80','honda'),
       (4, 'SH ',160000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','88','honda'),
       (5, 'vision ',60000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','80','honda'),
       (6, 'SH ',160000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','88','honda'),
       (7, 'vision ',60000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','80','honda'),
       (8, 'SH ',160000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','88','honda'),
       (9, 'vision ',60000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','80','honda'),
       (10, 'SH ',160000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','88','honda'),
       (11, 'vision ',60000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','80','honda'),
       (12, 'SH ',160000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','88','honda'),
       (13, 'vision ',60000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','80','honda'),
       (14, 'SH ',160000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','88','honda'),
       (15, 'vision ',60000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','80','honda'),
       (16, 'SH ',160000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','88','honda'),
       (17, 'vision ',60000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','80','honda'),
       (18, 'SH ',160000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','88','honda'),
       (19, 'vision ',60000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','80','honda'),
       (20, 'SH ',160000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','88','honda'),
       (21, 'vision ',60000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','80','honda'),
       (22, 'SH ',160000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','88','honda'),
       (23, 'vision ',60000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','80','honda'),
       (24, 'SH ',160000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','88','honda'),
       (25, 'vision ',60000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','80','honda'),
       (26, 'SH ',160000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','88','honda'),
       (27, 'vision ',60000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','80','honda'),
       (28, 'SH ',160000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','88','honda'),
       (29, 'vision ',60000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','80','honda'),
       (30, 'SH ',160000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','', '','88','honda');


INSERT INTO product_order (order_Id, phone_number, address, create_date, total_Money,order_status, payment_Method)
VALUES (1,'0375242475','102 dang van bi', '2022-07-02', 10000000, 'hoanthanh', ''),
       (2,'0375242475','102 dang van bi', '2022-07-02', 10000000, 'hoanthanh', ''),
       (3,'0909090999','102 dang van bi', '2022-07-02', 10000000, 'hoanthanh', ''),
       (4,'0909090999','102 dang van bi', '2022-07-02', 10000000, 'hoanthanh', '');