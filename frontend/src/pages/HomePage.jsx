

const HomePage = () => {
  return (
   

<>

<main className="main">


<section id="hero" className="hero section dark-background">

  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
        <h1>Build stronger digital connections</h1>
        <p>Use our URL shortener, QR Codes, and landing pages to engage your audience and connect them to the right information. Build, edit, and track everything inside the Bitly Connections Platform.</p>
        <div className="d-flex">
          <a href="#about" className="btn-get-started">Get Started</a>
          <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
        </div>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
        <img src="/1.png" className="img-fluid animated" alt=""/>
      </div>
    </div>
  </div>

</section>


<section id="contact" className="contact section">


<div className="container section-title" data-aos="fade-up">
  <h2>Shorten a long link</h2>
  
</div>

<div className="container" data-aos="fade-up" data-aos-delay="100">

  <div className="row gy-4">

   

    <div className="col-lg-12">
      <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
        <div className="row gy-4">

          
          <div className="col-md-12">
            <label for="subject-field" className="pb-2">Paste your long link here</label>
            <input type="text" className="form-control" name="subject" id="subject-field" required=""/>
          </div>

         

          <div className="col-md-12 text-center">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>

            <div className="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>

            <button type="submit">Shorten Link</button>
          </div>

        </div>
      </form>
    </div>

  </div>

</div>

</section>



</main>



</>
        
    
  )
}

export default HomePage