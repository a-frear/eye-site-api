INSERT INTO videos (title, author, url, eye, pink_eye)
VALUES
    ('eye love you', 'Amy Frear', 'https://www.youtube.com/embed/nzs-BK9gAuU', 'http://localhost:8000/images/asset-1.png', 'http://localhost:8000/images/pink-eye-1.png'), 
    ('Eye Date', 'Iva Yos', 'https://www.youtube.com/embed/c3DnVtFcu6g', 'http://localhost:8000/images/asset-2.png', 'http://localhost:8000/images/pink-eye-2.png'),
    ('Wink or Blink', 'Matthew Ober', 'https://www.youtube.com/embed/z3jTlVILgLw', 'http://localhost:8000/images/asset-3.png', 'http://localhost:8000/images/pink-eye-3.png'),
    ('eyeSweat', 'Amy Frear', 'https://www.youtube.com/embed/SQpEnMM_ZVk', 'http://localhost:8000/images/asset-4.png', 'http://localhost:8000/images/pink-eye-4.png'),
    ('EYE SITE PROMO', 'Matthew Ober', 'https://www.youtube.com/embed/dxU6G88Htkc', 'http://localhost:8000/images/asset-5.png', 'http://localhost:8000/images/pink-eye-5.png'),
    ('Eye Practice', 'Iva Yos', 'https://www.youtube.com/embed/zM3tcl7usag', 'http://localhost:8000/images/asset-6.png', 'http://localhost:8000/images/pink-eye-6.png'),
    ('behold beauty', 'Amy Frear', 'https://www.youtube.com/embed/UpG4WyUJhAc', 'http://localhost:8000/images/asset-7.png', 'http://localhost:8000/images/pink-eye-7.png'),
    ('Eye Site Promo', 'Iva Yos', 'https://www.youtube.com/embed/5GVBZjn_aHY', 'http://localhost:8000/images/asset-8.png', 'http://localhost:8000/images/pink-eye-8.png'),
    ('eye just cannot right now', 'Amy Frear', 'https://www.youtube.com/embed/42mNrSHO_nQ', 'http://localhost:8000/images/asset-9.png', 'http://localhost:8000/images/pink-eye-9.png'),
    ('staring contest #1', 'Amy Frear', 'https://www.youtube.com/embed/nzs-BK9gAuU', 'http://localhost:8000/images/asset-10.png', 'http://localhost:8000/images/pink-eye-10.png'),
    ('eye experiments', 'Matthew Ober', 'https://www.youtube.com/embed/z2cv2vXs_fs', 'http://localhost:8000/images/asset-11.png', 'http://localhost:8000/images/pink-eye-11.png'),
    ('do not mess with your eye', 'Amy Frear', 'https://www.youtube.com/embed/4l8WRt01N0E', 'http://localhost:8000/images/asset-12.png', 'http://localhost:8000/images/pink-eye-12.png'),
    ('mirror eye', 'Matthew Ober', 'https://www.youtube.com/embed/vcwg1K_eGCQ', 'http://localhost:8000/images/asset-13.png', 'http://localhost:8000/images/pink-eye-13.png'),
    ('eye on the ball', 'Amy Frear', 'https://www.youtube.com/embed/M78rsWdFYhE', 'http://localhost:8000/images/asset-14.png', 'http://localhost:8000/images/pink-eye-14.png'),
    ('wide open', 'Amy Frear', 'https://www.youtube.com/embed/pYHgutvpxWQ', 'http://localhost:8000/images/asset-15.png', 'http://localhost:8000/images/pink-eye-15.png');

INSERT INTO users (email, nickname)
VALUES
    ('amy.frear@temple.edu', 'amy');

INSERT INTO comments (video_id, user_id, content)
VALUES 
    (1, 1, 'Love this!'),
    (2, 1, 'Wow!'),
    (3, 1, 'I was on the edge of my seat!'),
    (4, 1, 'Really good!'),
    (5, 1, 'Eyes are life!'),
    (6, 1, 'I asked God for this and he gave it to me!');




