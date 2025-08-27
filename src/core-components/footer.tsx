import Text from "../base-components/text";

export default function Footer() {
	return (
		<footer
			className="min-h-15
      flex flex-col justify-center items-center
      bg-blue-heavy
      py-4"
		>
			{/* <div>
				<nav className="flex gap-4">
					<NavLink to="/">
						<Text variant="inter-md" className="bg-gray-300 p-1">
							Home
						</Text>
					</NavLink>
					<NavLink to="/componentes">
						<Text variant="inter-md" className="bg-gray-300 p-1">
							Componentes
						</Text>
					</NavLink>
					<NavLink to="/create">
						<Text variant="inter-md" className="bg-gray-300 p-1">
							Criar conta
						</Text>
					</NavLink>
					<NavLink to="/login">
						<Text variant="inter-md" className="bg-gray-300 p-1">
							Login
						</Text>
					</NavLink>
				</nav>
			</div> */}

			<div>
				<div>
					<Text variant="inter-footer">
						Ficou com dúvida em algo? Nos envie um email!
					</Text>
				</div>

				<div className="expand">
					<a
						href="https://mail.google.com/mail/?view=cm&fs=1&to=bazar.carioca.suporte@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Text variant="inter-hypertext">
							bazar.carioca.suporte@gmail.com
						</Text>
					</a>
				</div>
			</div>
		</footer>
	);
}
