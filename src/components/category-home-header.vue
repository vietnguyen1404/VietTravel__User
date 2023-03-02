<template>
	<div class="category-header">
		<h1 class="category-title">{{ title }}</h1>
		<div class="category-sub-title">
			<router-link to="/">
				{{ subTitle }}
				<i class="fa-solid fa-arrow-right"></i>
			</router-link>
		</div>
	</div>
</template>
<script>
export default {
	props : {
		title : String ,
		subTitle : String
	},
	created ( ) {
	}
}
</script>