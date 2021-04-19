<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SIAP+P</title>
    <link rel="stylesheet" href="css/siap.css">
</head>

<body>
    <!-- Include Navbar -->
    <?= $this->include('layout/component/navbar'); ?>
    <div class="container-fluid">
        <div class="siap-banner d-flex flex-column alin-items-center justify-content-center text-center">
            <div class="logo d-flex justify-content-center">
                <img src="assets/siapp.png" alt="">
            </div>
            <span class="pb-4">Human Resource Information System</span>
            <p>HRIS yang dapat membantu Anda menangani segala kebutuhan HRD Menghitung Absensi, Payroll, BPJS, dan PPH 21 secara benar dan cepat</p>
            <div class="siap-banner__wrapper w-100 m-auto d-flex justify-content-center">
                <div class="siap-banner__wrapper--item">
                    <img src="assets/Group 108.png" alt="">
                </div>
                <div class="siap-banner__wrapper--item">
                    <img src="assets/Group 111.png" alt="">
                </div>
                <div class="siap-banner__wrapper--item">
                    <img src="assets/Group 242.png" alt="">
                </div>
                <div class="siap-banner__wrapper--item">
                    <img src="assets/Group 243.png" alt="">
                </div>
            </div>
        </div>
        <div class="w-75 m-auto">

            <div class="siap-demo row d-flex justify-content-center align-items-center py-5">
                <div class="col-lg-6 d-flex justify-content-center mb-4">
                    <img src="assets/product-overview-newest.png" alt="">
                </div>
                <div class="col-lg-6">
                    <h2>HR Management System melalui ICT One Solution</h2>
                    <p class="py-4">SIAP+P adalah Solusi HR lengkap untuk merampingkan setiap transaksi SDM seperti data karyawan, kehadiran, penggajian, hingga manajemen kinerja.</p>
                    <a href="#" class="btn btn--demo rounded-pill text-light px-4">REQUEST DEMO</a>
                </div>
            </div>
            <div class="testimonial text-center py-5">
                <h2>Aplikasi HRD <br>Terbaik di Indonesia</h2>
                <p class="py-4">Menggunakan proses otomasi SIAP+p akan membantu departemen SDM uncuk secara efektif mengelola produktivitas orang dan mengurangi biaya perusahaan</p>

                <div class="testimonial--cards row">
                    <div class="testi-card col-lg-4 pb-5">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/Group 262.png">
                            <div class="white-bg"></div>
                        </div>
                        <div class="body py-3 px-3">
                            <h4>OPERASIONAL YANG EFEKTIF</h4>
                            <p>Serahkan pekerjaan Anda ke SIstem, SIAP+p meningkatkan produktifitas karyawan menggunkan aplikasi seluler</p>
                        </div>
                    </div>
                    <div class="testi-card col-lg-4 pb-5">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/Group 262.png">
                            <div class="white-bg"></div>
                        </div>
                        <div class="body py-3 px-3">
                            <h4>ADAPTIF TERHADAP PERATURAN</h4>
                            <p>SIAP+P memastikan sistem Anda mengikuti peraturan Pemerintah terbaru dengan pembaruan gratis</p>
                        </div>
                    </div>
                    <div class="testi-card col-lg-4 pb-5">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/Group 262.png">
                            <div class="white-bg"></div>
                        </div>
                        <div class="body py-3 px-3">
                            <h4>KURANGI BIAYA PERUSAHAAN</h4>
                            <p>SIAP+P dapat memvalidasi indeks lembur karyawan Anda sesuai dengan jam kerja yang benar terjadi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="module">
                <h2 class="text-center py-5">Mobile Attandance System</h2>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-4 text-center row">
                        <div class="module--item col-md-12">
                            <div class="icon">
                                <img src="assets/Icon awesome-map-marker-alt.png" alt="">
                            </div>
                            <h4>Multi Location Attendance</h4>
                            <p class="text-justify">Tagging kehadiran pada Map yang aman, akurat, tidak ada kehadiran palsu, data kehadiran dapat diandalkan untuk pengukuran produktivitas yang tepat .</p>
                        </div>
                        <div class="module--item col-md-12">
                            <div class="icon">
                                <img src="assets/Icon ionic-ios-eye.png" alt="">
                            </div>
                            <h4>Monitor Kehadiran Karyawan</h4>
                            <p class="text-justify">Tagging kehadiran pada Map yang aman, akurat, tidak ada kehadiran palsu, data kehadiran dapat diandalkan untuk pengukuran produktivitas yang tepat .</p>
                        </div>
                    </div>
                    <div class="col-md-4 text-center row">
                        <div class="module--item col-md-12">
                            <img src="assets/Image 3.png" alt="">
                        </div>
                        <div class="module--item col-md-12">
                            <a href="#" class="btn btn-learn rounded-pill px-4 py-2 text-light my-5">LEARN MORE</a>
                        </div>
                    </div>
                    <div class="col-md-4 text-center row">
                        <div class="module--item col-md-12">
                            <div class="icon">
                                <img src="assets/Icon awesome-map-marker-alt.png" alt="">
                            </div>
                            <h4>Self Request: Cuti, Lembur, Izin</h4>
                            <p class="text-justify">Tagging kehadiran pada Map yang aman, akurat, tidak ada kehadiran palsu, data kehadiran dapat diandalkan untuk pengukuran produktivitas yang tepat .</p>
                        </div>
                        <div class="module--item col-md-12">
                            <div class="icon">
                                <img src="assets/Icon ionic-ios-eye.png" alt="">
                            </div>
                            <h4>Reminder & Notification</h4>
                            <p class="text-justify">Tagging kehadiran pada Map yang aman, akurat, tidak ada kehadiran palsu, data kehadiran dapat diandalkan untuk pengukuran produktivitas yang tepat .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="feature m-auto py-5">
            <h2 class="text-center py-5">Features</h2>
            <div class="feature__wrapper row d-flex justify-content-center">
                <div class="feature__wrapper--item col-lg-4 m-2">
                    <div class="header">
                        <div class="logo ms-4"></div>
                        <div class="white-bg"></div>
                    </div>
                    <div class="body p-4">
                        <h5 class="">Attendance</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi, sequi optio impedit facilis, ullam eius delectus labore voluptatum ut saepe quam culpa deleniti laboriosam exercitationem. Eveniet numquam quia reprehenderit.</p>
                        <a href="#" class="btn btn-learn rounded-pill text-light">LEARN MORE</a>
                    </div>
                </div>
                <div class="feature__wrapper--item col-lg-4 m-2">
                    <div class="header">
                        <div class="logo ms-4"></div>
                        <div class="white-bg"></div>
                    </div>
                    <div class="body p-4">
                        <h5 class="">Medical</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi, sequi optio impedit facilis, ullam eius delectus labore voluptatum ut saepe quam culpa deleniti laboriosam exercitationem. Eveniet numquam quia reprehenderit.</p>
                        <a href="#" class="btn btn-learn rounded-pill text-light">LEARN MORE</a>
                    </div>
                </div>
                <div class="feature__wrapper--item col-lg-4 m-2">
                    <div class="header">
                        <div class="logo ms-4"></div>
                        <div class="white-bg"></div>
                    </div>
                    <div class="body p-4">
                        <h5 class="">Loan</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi, sequi optio impedit facilis, ullam eius delectus labore voluptatum ut saepe quam culpa deleniti laboriosam exercitationem. Eveniet numquam quia reprehenderit.</p>
                        <a href="#" class="btn btn-learn rounded-pill text-light">LEARN MORE</a>
                    </div>
                </div>
                <div class="feature__wrapper--item col-lg-4 m-2">
                    <div class="header">
                        <div class="logo ms-4"></div>
                        <div class="white-bg"></div>
                    </div>
                    <div class="body p-4">
                        <h5 class="">Personel</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi, sequi optio impedit facilis, ullam eius delectus labore voluptatum ut saepe quam culpa deleniti laboriosam exercitationem. Eveniet numquam quia reprehenderit.</p>
                        <a href="#" class="btn btn-learn rounded-pill text-light">LEARN MORE</a>
                    </div>
                </div>
                <div class="feature__wrapper--item col-lg-4 m-2">
                    <div class="header">
                        <div class="logo ms-4"></div>
                        <div class="white-bg"></div>
                    </div>
                    <div class="body p-4">
                        <h5 class="">Recruitment</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi, sequi optio impedit facilis, ullam eius delectus labore voluptatum ut saepe quam culpa deleniti laboriosam exercitationem. Eveniet numquam quia reprehenderit.</p>
                        <a href="#" class="btn btn-learn rounded-pill text-light">LEARN MORE</a>
                    </div>
                </div>
                <div class="feature__wrapper--item col-lg-4 m-2">
                    <div class="header">
                        <div class="logo ms-4"></div>
                        <div class="white-bg"></div>
                    </div>
                    <div class="body p-4">
                        <h5 class="">Recruitment</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi, sequi optio impedit facilis, ullam eius delectus labore voluptatum ut saepe quam culpa deleniti laboriosam exercitationem. Eveniet numquam quia reprehenderit.</p>
                        <a href="#" class="btn btn-learn rounded-pill text-light">LEARN MORE</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-75 m-auto">
            <div class="company">
                <div class="row">
                    <div class="col-md-12 row d-flex align-items-center py-5">
                        <div class="col-md-6">
                            <h4>Yakult</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos culpa rem doloribus fugiat, sit vel minus labore commodi tempora?<br> <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores ea omnis iusto cumque ipsam consequatur placeat necessitatibus provident laborum!
                            </p>
                        </div>
                        <div class="col-md-6">
                            <img src="assets/makesumo-doKatAORoIs-unsplash.png" alt="">
                        </div>
                    </div>
                    <div class="col-md-12 row d-flex  flex-sm-column-reverse flex-md-row align-items-center py-5 special-column">
                        <div class="col-md-6">
                            <img src="assets/makesumo-doKatAORoIs-unsplash.png" alt="">
                        </div>
                        <div class="col-md-6 ">
                            <h4>Yakult</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos culpa rem doloribus fugiat, sit vel minus labore commodi tempora?<br> <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores ea omnis iusto cumque ipsam consequatur placeat necessitatibus provident laborum!
                            </p>
                        </div>

                    </div>
                    <div class="col-md-12 row d-flex align-items-center py-5">
                        <div class="col-md-6">
                            <h4>Yakult</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos culpa rem doloribus fugiat, sit vel minus labore commodi tempora?<br> <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores ea omnis iusto cumque ipsam consequatur placeat necessitatibus provident laborum!
                            </p>
                        </div>
                        <div class="col-md-6">
                            <img src="assets/makesumo-doKatAORoIs-unsplash.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>






        <div class="client">
            <h2 class="title text-center py-5">What Our Client Say</h2>
            <div class=" client__wrapper d-flex">
                <div class="client-card">
                    <div class="card-container">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/WhatsApp Image 2020-12-03 at 3.25.35 PM.png" alt="">
                            <div class="white-bg"></div>
                        </div>
                        <div class="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est dolor accusantium quasi molestiae maiores, eligendi neque quae minima nulla optio, nesciunt, quam autem aliquid vero quod? Nam, tenetur et!</p>
                            <span class="d-block w-100 text-center">NAME JOB TITLE</span>
                        </div>
                    </div>
                </div>
                <div class="client-card">
                    <div class="card-container">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/WhatsApp Image 2020-12-03 at 3.25.35 PM.png" alt="">
                            <div class="white-bg"></div>
                        </div>
                        <div class="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est dolor accusantium quasi molestiae maiores, eligendi neque quae minima nulla optio, nesciunt, quam autem aliquid vero quod? Nam, tenetur et!</p>
                            <span class="d-block w-100 text-center">NAME JOB TITLE</span>
                        </div>
                    </div>
                </div>
                <div class="client-card">
                    <div class="card-container">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/WhatsApp Image 2020-12-03 at 3.25.35 PM.png" alt="">
                            <div class="white-bg"></div>
                        </div>
                        <div class="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est dolor accusantium quasi molestiae maiores, eligendi neque quae minima nulla optio, nesciunt, quam autem aliquid vero quod? Nam, tenetur et!</p>
                            <span class="d-block w-100 text-center">NAME JOB TITLE</span>
                        </div>
                    </div>
                </div>
                <div class="client-card">
                    <div class="card-container">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/WhatsApp Image 2020-12-03 at 3.25.35 PM.png" alt="">
                            <div class="white-bg"></div>
                        </div>
                        <div class="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est dolor accusantium quasi molestiae maiores, eligendi neque quae minima nulla optio, nesciunt, quam autem aliquid vero quod? Nam, tenetur et!</p>
                            <span class="d-block w-100 text-center">NAME JOB TITLE</span>
                        </div>
                    </div>
                </div>
                <div class="client-card">
                    <div class="card-container">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/WhatsApp Image 2020-12-03 at 3.25.35 PM.png" alt="">
                            <div class="white-bg"></div>
                        </div>
                        <div class="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est dolor accusantium quasi molestiae maiores, eligendi neque quae minima nulla optio, nesciunt, quam autem aliquid vero quod? Nam, tenetur et!</p>
                            <span class="d-block w-100 text-center">NAME JOB TITLE</span>
                        </div>
                    </div>
                </div>
                <div class="client-card">
                    <div class="card-container">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/WhatsApp Image 2020-12-03 at 3.25.35 PM.png" alt="">
                            <div class="white-bg"></div>
                        </div>
                        <div class="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est dolor accusantium quasi molestiae maiores, eligendi neque quae minima nulla optio, nesciunt, quam autem aliquid vero quod? Nam, tenetur et!</p>
                            <span class="d-block w-100 text-center">NAME JOB TITLE</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-75 m-auto">
            <div class="contact py-5">
                <h2 class="text-center py-5">Ready to Achieve Outstanding Performance?</h2>
                <div class="row d-flex align-items-center">
                    <div class="col-md-6">
                        <div class="row contact-text">
                            <div class="col-md-12 row mb-4">
                                <div class="col-md-6 mb-3">Give us a Call</div>
                                <div class="col-md-6"><span class="rounded-pill purple text-light px-4 py-2">+62 21- 386 1772</span></div>
                            </div>
                            <div class="col-md-12 row">
                                <div class="col-md-6 mb-3">Request Demo</div>
                                <div class="col-md-6"><span class="rounded-pill purple text-light px-4 py-2">CONTACT US</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <!-- Video -->
                    </div>
                </div>
            </div>
        </div>
        <!-- Include Footer -->
        <?= $this->include('layout/component/footer'); ?>
    </div>
</body>

</html>

<script src="js/siap.js"></script>