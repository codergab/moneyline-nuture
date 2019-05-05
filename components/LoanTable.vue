<template>
	<table class="table">
		<thead>
			<tr>
				<th>Column</th>
				<th>Column</th>
				<th>Column</th>
				<th>Column</th>
				<th>Column</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Lorem</td>
				<td>Lorem</td>
				<td>Lorem</td>
				<td>Lorem</td>
				<td>
					<b-button-group>
						<b-button size="xs" variant="primary">View</b-button>
						<b-button size="xs" variant="info">Edit</b-button>
						<b-button size="xs" variant="danger">Delete</b-button>
					</b-button-group>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	name: "LoanTable"
};
</script>
