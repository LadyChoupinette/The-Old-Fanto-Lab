import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        {/*<h2 className="major">Get in touch</h2>*/}
        {/*<p>*/}
        {/*  Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.*/}
        {/*  Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis*/}
        {/*  egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in*/}
        {/*  tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.*/}
        {/*</p>*/}
        {/*<form method="post" action="/#">*/}
        {/*  <div className="fields">*/}
        {/*    <div className="field">*/}
        {/*      <label htmlFor="name">Name</label>*/}
        {/*      <input type="text" name="name" id="name" />*/}
        {/*    </div>*/}
        {/*    <div className="field">*/}
        {/*      <label htmlFor="email">Email</label>*/}
        {/*      <input type="email" name="email" id="email" />*/}
        {/*    </div>*/}
        {/*    <div className="field">*/}
        {/*      <label htmlFor="message">Message</label>*/}
        {/*      <textarea name="message" id="message" rows="4"></textarea>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <ul className="actions">*/}
        {/*    <li>*/}
        {/*      <input type="submit" value="Send Message" />*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</form>*/}
        {/*<a href='https://the-old-fanto-lab.vercel.app/'>Accédez à la version Beta !</a>*/}
        {/*<div className="contact" >*/}
        {/*  <li className="fa-home">{config.address}</li>*/}
        {/*  <li className="fa-phone">{config.phone}</li>*/}


          {/*{config.socialLinks.map(social => {*/}
          {/*  const { icon, url } = social;*/}
          {/* return (*/}
          {/*    <li className={`${icon}`} key={url}>*/}
          {/*      <a href={url}>{url}</a>*/}
          {/*    </li>*/}
          {/*  );*/}
          {/*})}*/}
        {/*</div>*/}
        <ul className="icons">
            <li><a href="https://twitter.com/TheOldFantoLab" className="icon fa-twitter">
                <span className="label">Twitter</span>
            </a></li>   <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/>
          <li><a href='https://www.deviantart.com/joakimolofsson/gallery'>&copy; Artist : Joakim Olofsson  </a></li>
          {/*<br/><li><a>Do you know an artist ? Contact me on tweeter !</a></li><br/><br/>*/}
        </ul>
          {/*<ul className="icons">*/}
          {/*    <li><a href="/#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>*/}
          {/*    <li><a href="/#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>*/}
          {/*    <li><a href="/#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>*/}
          {/*    <li><a href="/#" className="icon fa-github"><span className="label">Github</span></a></li>*/}
          {/*</ul>*/}

          <br/><br/><br/><br/><br/><br/><br/>
      </div>
    </section>
  );
}
