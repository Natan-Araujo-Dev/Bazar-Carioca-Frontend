import React from "react";
import { type VariantProps, cva } from "class-variance-authority";

import Text from "../base-components/text";
import SearchBar from "./search-bar";
import SelectDropdown from "../base-components/select-dropdown";
import { NavLink } from "react-router";

export default function Header() {
	return (
		<div
			className="
		w-1/1
		h-20
      flex
      justify-between
		items-center
      bg-blue-medium"
		>
			<div className="m-3">
				<NavLink to="/">
					<Text variant="zilla-lg">
						Bazar <br /> Carioca.com
					</Text>
				</NavLink>
			</div>

			<SearchBar />

			<div className="flex space-x-15 mr-5">
				<div>
					<NavLink to="/create">
						<Text variant="inter-header-selectable">Criar conta</Text>
					</NavLink>
				</div>

				<div>
					<NavLink to="/login">
						<Text variant="inter-header-selectable">Login</Text>
					</NavLink>
				</div>
			</div>
		</div>
	);
}
