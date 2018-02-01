import React from "react";
import { Container, Grid } from "semantic-ui-react";
import SearchBox from "../searches/SearchBox";
import PropertyFilters from "../filters/PropertyFilters";

const PropertySearchForm = () => (
	<Container fluid>
		<Grid
			columns="4"
			style={{
				margin: 0
			}}
		>
			<Grid.Row
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					padding: "5px",
					background: "#d1e7f8"
				}}
			>
				<Grid.Column width="4">
					<SearchBox
						size="small"
						width="50%"
						placeholder="Enter a Bay Area City"
					/>
				</Grid.Column>
				<Grid.Column width="12">
					<PropertyFilters stateOptions={[1, 2, 3, 4, 5, 6]} />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Container>
);

export default PropertySearchForm;
