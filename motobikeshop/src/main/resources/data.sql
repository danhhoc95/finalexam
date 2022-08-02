INSERT INTO Store (store_id, store_name, address, city, district, hot_line, images, open_time, close_time,latitude, longitude, outstanding)
VALUES (1, 'Cua hang 1','102 dang van bi','TP.HCM','TP.ThuDuc','0375242475', 'images/test','8:00 AM','9:00 PM','','',1),
       (2, 'Cua hang 2','102 dang van bi','TP.HCM','TP.ThuDuc','0375242475', 'images/test','8:00 AM','9:00 PM','','',0);

INSERT INTO user (user_name, password, email, phone_number, address, created_Date, permissions)
VALUES ('danhhoc', '$2a$12$ttuGa4fp6d61b8E5BQGIke1Ci1QuOtniXm7EVoHWjR05FpQEG44we','danghoc@gmail.com','0375242475','TP.ThuDuc','2022-06-28', 'admin' ),
       ('thanghoang', '$2a$12$ttuGa4fp6d61b8E5BQGIke1Ci1QuOtniXm7EVoHWjR05FpQEG44we','thanghoang@gmail.com','123456789','TP.HCM','2022-06-28', 'admin' ),
       ('user', '$2a$12$ttuGa4fp6d61b8E5BQGIke1Ci1QuOtniXm7EVoHWjR05FpQEG44we','thanghoang6@gmail.com','0909090999','TP.HCM','2022-06-28', 'user' );

INSERT INTO Product (product_id, name, price, quantity, thumbnail, detail_Image, description, height, origin)
VALUES (1, 'CB1000R 2021',510000000,10,'https://cdn.honda.com.vn/motorbikes/December2021/UwU4ep22LakmSoqcw7AO.jpg','https://cdn.honda.com.vn/motorbike-versions/December2021/XKBSyoqK3rwzkxDt64MZ.png', 'Thông số kĩ thuật','80','honda'),
       (2, 'CB150R The Streetster',105500000,5,'https://cdn.honda.com.vn/motorbikes/May2022/LKpqUNRq9Nrd7KeXyeZD.png','https://cdn.honda.com.vn/motorbikes/May2022/d098sUeMeatXziOiW3AR.jpg', '','88','honda'),
       (3, 'Air Blade 125/160 ',42900000,5,'https://cdn.honda.com.vn/motorbikes/May2022/XKiyiYA1c83GGI5dfGHE.png','https://cdn.honda.com.vn/motorbikes/May2022/yXVDCgQDZJcYqcCZPzyQ.png', '','80','honda'),
       (4, 'Vision ',30000000,5,'https://cdn.honda.com.vn/motorbikes/December2020/XTEfLj17cFTqoZw05URt.png','https://cdn.honda.com.vn/motorbikes/December2020/Bf4EFMSz9Q70ZZj3BVm1.png', '','88','honda'),
       (5, 'Winner X ',46160000,5,'https://cdn.honda.com.vn/motorbikes/December2021/UanjC5lq3Hin1fzzxkSU.png','https://cdn.honda.com.vn/motorbikes/December2021/c6Dgnczm9zqvHI2xdBkP.png', '','80','honda'),
       (6, 'Sh Mode 125cc',54186545,5,'https://cdn.honda.com.vn/motorbikes/December2021/PfppnE0OTCgYeZATSK5q.png','https://cdn.honda.com.vn/motorbikes/December2021/Wd66MjGr9TIeXHOhz2Rj.png', '','88','honda'),
       (7, 'LEAD 125cc',60000000,5,'https://cdn.honda.com.vn/motorbikes/December2021/zQI2D5pggA5tzuk0DFV4.png','https://cdn.honda.com.vn/motorbikes/December2021/zQI2D5pggA5tzuk0DFV4.png', '','80','honda'),
       (8, 'Future 125 FI ',30328363,5,'https://cdn.honda.com.vn/motorbikes/October2021/OH34NuhAe2Lht6EVDGj3.png','https://cdn.honda.com.vn/motorbikes/October2021/OH34NuhAe2Lht6EVDGj3.png', '','88','honda'),
       (9, 'SH350i ',148990000,5,'https://cdn.honda.com.vn/motorbikes/August2021/8biyVnv0M5aF1hisXpcU.jpg','https://cdn.honda.com.vn/motorbikes/August2021/8biyVnv0M5aF1hisXpcU.jpg', '','80','honda'),
       (10, 'Super Cub C125 ',85801091,5,'https://cdn.honda.com.vn/motorbikes/October2021/AGlyT5hHi2yvLQUo2Y7L.png','https://cdn.honda.com.vn/motorbikes/October2021/AGlyT5hHi2yvLQUo2Y7L.png', '','88','honda'),
       (11, 'CBR150R ',71290000,5,'https://cdn.honda.com.vn/motorbikes/September2021/DQY46zxfvxNB5BO68PMo.png','https://cdn.honda.com.vn/motorbikes/September2021/DQY46zxfvxNB5BO68PMo.png', '','80','honda'),
       (12, 'Wave Alpha 110cc ',17859000,5,'https://cdn.honda.com.vn/motorbikes/September2020/QCYW8G9W2LImOuhy0ZkV.jpg','https://cdn.honda.com.vn/motorbikes/September2020/QCYW8G9W2LImOuhy0ZkV.jpg', '','88','honda'),
       (13, 'Wave RSX FI 110 ',21688000,5,'https://cdn.honda.com.vn/motorbikes/November2020/A2c2CQ001cA1uV6Hkgum.png','https://cdn.honda.com.vn/motorbikes/November2020/A2c2CQ001cA1uV6Hkgum.png', '','80','honda'),
       (14, 'CB500F 2021 ',160000000,5,'https://cdn.honda.com.vn/motorbikes/March2021/PSy29nQ1EdFI4022Y6GX.jpg','https://cdn.honda.com.vn/motorbikes/March2021/PSy29nQ1EdFI4022Y6GX.jpg', '','88','honda'),
       (15, 'Blade 110 ',60000000,5,'https://cdn.honda.com.vn/motorbikes/November2020/jIFOfuwtYPh2ARsu56VK.png','https://cdn.honda.com.vn/motorbikes/November2020/jIFOfuwtYPh2ARsu56VK.png', '','80','honda'),
       (16, 'EXCITER 150 PHIÊN BẢN GIỚI HẠN ',45300000,5,'https://yamaha-motor.com.vn/wp/wp-content/webp-express/webp-images/doc-root/wp/wp-content/uploads/2019/04/Exciter-Blue-Orange-004-1.png.webp','https://yamaha-motor.com.vn/wp/wp-content/webp-express/webp-images/doc-root/wp/wp-content/uploads/2019/04/Exciter-Blue-Orange-004-1.png.webp', '','88','yamaha'),
       (17, 'Yamaha Grande bản giới hạn ',56000000,5,'https://xemaynamtien.com/uploads/source/san-pham/grande-gioi-han/grande-gioi-han-cam.png','https://xemaynamtien.com/uploads/source/san-pham/grande-gioi-han/grande-gioi-han-cam.png', '','80','yamaha'),
       (18, 'Yamaha Grande bản đặc biệt',56000000,5,'https://xemaynamtien.com/uploads/source/san-pham/grande-dac-biet/grande-dac-biet-trang.png','https://xemaynamtien.com/uploads/source/san-pham/grande-dac-biet/grande-dac-biet-trang.png', '','88','yamaha'),
       (19, 'Yamaha Sirus FI Bánh Mâm ',25000000,5,'https://xemaynamtien.com/uploads/source/san-pham/sirus-fi-banh-dia/sirus-fi-banh-dia-den.png','https://xemaynamtien.com/uploads/source/san-pham/sirus-fi-banh-dia/sirus-fi-banh-dia-den.png', '','80','yamaha'),
       (20, 'Yamaha Sirus FI Bánh đĩa ',24000000,5,'https://xemaynamtien.com/uploads/source/san-pham/sirus-fi-banh-dia/sirus-fi-banh-dia-trang.png','https://xemaynamtien.com/uploads/source/san-pham/sirus-fi-banh-dia/sirus-fi-banh-dia-trang.png', '','88','yamaha'),
       (21, 'Yamaha Sirus FI Bánh dùm ',23000000,5,'https://xemaynamtien.com/uploads/source/san-pham/sirus-fi-banh-dum/sirus-fi-dum-do.png','https://xemaynamtien.com/uploads/source/san-pham/sirus-fi-banh-dum/sirus-fi-dum-do.png', '','80','yamaha'),
       (22, 'Yamaha Janus ',39000000,5,'https://xemaynamtien.com/uploads/source/san-pham/janus-gioi-han/janus-xam.png','https://xemaynamtien.com/uploads/source/san-pham/janus-gioi-han/janus-xam.png', '','88','yamaha'),
       (23, 'Honda Sonic ',62000000,5,'https://xemaynamtien.com/uploads/source/san-pham/sonic-150r/sonic-den-do-trang.jpg','https://xemaynamtien.com/uploads/source/san-pham/sonic-150r/sonic-den-do-trang.jpg', '','80','honda'),
       (24, 'Honda Wave RSX bánh mâm ',27900000,5,'https://xemaynamtien.com/uploads/source/san-pham/wave-rsx-banh-mam/wave-rsx-banh-mam-xanh-den.png','https://xemaynamtien.com/uploads/source/san-pham/wave-rsx-banh-mam/wave-rsx-banh-mam-xanh-den.png', '','88','honda'),
       (25, 'Honda Wave RSX bánh đùm ',24900000,5,'https://xemaynamtien.com/uploads/source/san-pham/wave-rsx-banh-dum/rsx-dum-do.png','https://xemaynamtien.com/uploads/source/san-pham/wave-rsx-banh-dum/rsx-dum-do.png', '','80','honda'),
       (26, 'Honda Wave RSX bánh đĩa ',26000000,5,'https://xemaynamtien.com/uploads/source/san-pham/wave-rsx-banh-dum/rsx-dum-do.png','https://xemaynamtien.com/uploads/source/san-pham/wave-rsx-banh-dum/rsx-dum-do.png', '','88','honda'),
       (27, 'Honda SH 150i cao cấp ',122000000,5,'https://xemaynamtien.com/uploads/source/san-pham/sh-150-cao-cap/sh-150-cao-cap-mau-do.png','https://xemaynamtien.com/uploads/source/san-pham/sh-150-cao-cap/sh-150-cao-cap-mau-do.png', '','80','honda'),
       (28, 'Honda SH 150i tiêu chuẩn',102000000,5,'https://xemaynamtien.com/uploads/source/san-pham/sh-150-cao-cap/sh-150-cao-cap-mau-do.png','https://xemaynamtien.com/uploads/source/san-pham/sh-150-cao-cap/sh-150-cao-cap-mau-do.png', '','88','honda'),
       (29, 'Honda Air Blade 150 Giới Hạn',63500000,5,'https://xemaynamtien.com/uploads/source/san-pham/air-blade-150-gioi-han/ab-150-gioi-han.png','https://xemaynamtien.com/uploads/source/san-pham/air-blade-150-gioi-han/ab-150-gioi-han.png', '','80','honda'),
       (30, 'Honda Air Blade 125 Tiêu Chuẩn',47000000,5,'https://xemaynamtien.com/uploads/source/san-pham/air-blade-125-tieu-chuan/ab-tc-trang.png','https://xemaynamtien.com/uploads/source/san-pham/air-blade-125-tieu-chuan/ab-tc-trang.png', '','88','honda');

insert into product_detail (id, detail)
values (1,'1234');

INSERT INTO product_order (order_Id, phone_number, address, create_date, total_Money,order_status, payment_Method)
VALUES (1,'0375242475','102 dang van bi', '2022-07-02', 10000000, 'hoanthanh', ''),
       (2,'0375242475','102 dang van bi', '2022-07-02', 10000000, 'hoanthanh', ''),
       (3,'0909090999','102 dang van bi', '2022-07-02', 10000000, 'hoanthanh', ''),
       (4,'0909090999','102 dang van bi', '2022-07-02', 10000000, 'hoanthanh', '');