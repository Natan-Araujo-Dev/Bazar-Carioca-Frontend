import { NavLink } from "react-router-dom";
import Text from "./text";

export default function BazarCariocaButton() {
	return (
		<div className="m-3 expand">
			<NavLink to="/">
				<Text variant="zilla-lg">
					Bazar <br /> Carioca.com
				</Text>
			</NavLink>
		</div>
	);
}
