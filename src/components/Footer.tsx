export const Footer = (_props: {}) => {
    return (<footer id="colophon" className="footer-wrapper">
	<div className="footer-container">
		<div className="footer-branding">
			<div className="footer-logo">
				<a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
					<img src="<?php echo get_template_directory_uri() . '//images/logo-black.svg'; ?>"></img>
				</a>
			</div>
			
			<div className="footer-social">
				<a href="https://www.facebook.com/drexel.triangle/" target="_blank">
					<span className="fa-stack fa-1x">
						<i className="fa fa-circle fa-stack-2x" style={{"color": "#3b5998"}}></i>
						<i className="fa fa-facebook fa-stack-1x"></i>
					</span>
				</a>
				<a href="https://twitter.com/drexeltriangle" target="_blank">
					<span className="fa-stack fa-1x">
						{/* <i className="fa fa-circle fa-stack-2x" style="color: #00acee;"></i> */}
						<i className="fa fa-twitter fa-stack-1x"></i>
					</span>
				</a>
				<a href="https://www.instagram.com/drexeltriangle/" target="_blank">
					<span className="fa-stack fa-1x">
						<i className="fa fa-circle fa-stack-2x text-instagram"></i>
						<i className="fa fa-instagram fa-stack-1x"></i>
					</span>
				</a>
				<a href="https://www.youtube.com/user/DrexelTriangle" target="_blank">
					<span className="fa-stack fa-1x">
						{/* <i className="fa fa-circle fa-stack-2x" style="color: #e52d27;"></i> */}
						<i className="fa fa-youtube-play fa-stack-1x"></i>
					</span>
				</a>
				<a href="http://thetriangle.us2.list-manage.com/subscribe/post?u=6eb4aab81745d3436b16a6181&id=7389750c95" target="_blank">
					<span className="fa-stack fa-1x">
						{/* <i className="fa fa-circle fa-stack-2x" style="color: #07294D;"></i> */}
						<i className="fa fa-envelope-o fa-stack-1x"></i>
					</span>
				</a>
			</div>
			
			<div className="footer-tagline">
				THE INDEPENDENT STUDENT NEWSPAPER AT DREXEL UNIVERSITY SINCE 1926
			</div>
		</div>
		
		{/* <?php
			if(has_nav_menu('footer'))
				wp_nav_menu(array('container' => 'nav',
								  'container_className' => 'footer-nav-container',
								  'menu_className' => 'footer-nav-links',
								  'theme_location' => 'footer'));
			else
				// Display error message if menu "footer" has not been defined within WordPress
				echo 'Menu "footer" is not defined!</br>';
		?> */}
	</div>
	
	<div className="footer-copyright">
		{/* &copy<?php echo date("Y"); ?> The Triangle. All rights are reserved, except where otherwise noted. */}
	</div>
	
	<div className="footer-disclaimer">
		The Triangle is an independent student organization and is not owned nor operated by Drexel University.
	</div>
</footer>);
}