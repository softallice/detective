<template>
	<page>
		<q-header class="bg-white" >
			<q-toolbar>
			<q-space />

			<q-toolbar-title class="text-dark"> 탐정리스트 </q-toolbar-title>
			
			<div class="q-pl-none  row no-wrap items-center">
				<q-btn 
				round 
				dense 
				flat 
				color="grey-8" 
				icon="las la-bell" 
				>
				<q-badge 
					class="q-badge q-badge--floating "
					color="red" 
					rounded 
					floating  
				/>
				</q-btn>

				<q-btn 
				round 
				flat
				>
				<q-avatar size="26px">
					<img :src="userInfo ? userInfo.avatar :  'https://cdn.quasar.dev/img/boy-avatar.png'">
				</q-avatar>
				</q-btn>

				<q-btn flat round dense color="dark" icon="las la-bars" />
			</div>
			</q-toolbar>
		</q-header>
		<page-body>
			<q-list 
				class="full-width"
				separator>
				<q-item
					v-for="user in users"
					:key="user.id"
					to="/chat"
					clickable
					v-ripple
				>
					<q-item-section avatar>
						<q-avatar color="primary" text-color="white">
							{{ user.name.charAt(0) }}
						</q-avatar>
					</q-item-section>

					<q-item-section>
						<q-item-label>{{ user.name }}</q-item-label>
					</q-item-section>

					<q-item-section side>
						<q-badge 
							:color="user.online ? 'light-green-5' : 'grey-4'">
							{{ user.online ? 'Online' : 'Offline' }}
						</q-badge>
					</q-item-section>
				</q-item>

			</q-list>
		</page-body>
	</page>
</template>

<script>
import { onActivated, onDeactivated, ref } from 'vue'
export default {
	setup() {
		const users = ref([{
				id: 1,
				name: '제니',
				online: true
			}, {
				id: 2,
				name: '민호',
				online: false
			}, {
				id: 3,
				name: '가영',
				online: true
		}])

		const userInfo = ref({
				avatar : 'https://cdn.quasar.dev/img/boy-avatar.png'
		})
		return {
			users,
			userInfo
		}
	}
}
</script>

<style>
</style>
