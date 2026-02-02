import './Footer.css'

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-content'>
				{/* Top Section */}
				<div className='footer-top'>
					<div className='footer-brand'>
						<h3>Modern Living</h3>
						<p>Crafting spaces that frame the silence of nature.</p>
					</div>

					<div className='footer-info'>
						<div className='footer-column'>
							<h4>Studio</h4>
							<p>Złota 44, Warsaw</p>
							<p style={{ marginTop: '0.5rem' }}>Forest Lane 12, Green City</p>
						</div>
						<div className='footer-column'>
							<h4>Contact</h4>
							<a href='mailto:hello@modernliving.com'>hello@modernliving.com</a>
							<p>+48 123 456 789</p>
						</div>
						<div className='footer-column'>
							<h4>Direct</h4>
							<a href='mailto:architect@modernliving.com'>architect@modernliving.com</a>
							<p>+48 555 000 999</p>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className='footer-bottom'>
					<div>&copy; {new Date().getFullYear()} Modern Living. All Rights Reserved.</div>
					<div className='footer-credit'>
						Demo site by{' '}
						<a href='https://kacperbaranowski.dev' target='_blank' rel='noopener noreferrer'>
							kacperbaranowski.dev
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
