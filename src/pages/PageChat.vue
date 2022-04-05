<template>
  <page>
    <page-header>
      <template #buttons-left>
        <page-header-btn-back
          label="이전"
        />
      </template>
      <template #title>채팅</template>
    </page-header>
	<page-body>
		<q-banner class="bg-grey-4 text-center">
		User is offline.
		</q-banner>
		<div class="q-pa-md column col justify-end">
			<q-chat-message
				v-for="message in messages"
				:key="message.text"
			:name="message.from"
			:text="[message.text]"
			:sent="message.from == 'me' ? true : false"
			/>
		</div>
	</page-body>
		<q-footer elevated>
			<q-toolbar>		
				<q-input
					class="full-width"
					v-model="newMessage"
					bg-color="white"
					outlined
					rounded
					label="Message"
					dense>

				<template v-slot:after>
					<q-btn
						round
						dense
						flat
						type="submit"
						color="white"
						icon="send"
						@click="sendMessage" />
				</template>
				</q-input>		
			</q-toolbar>
		</q-footer>
  </page>
</template>


<script>
import { onActivated, onDeactivated, ref } from 'vue'
export default {
	setup() {
		const newMessage = ref('');
		const messages = ref([
			{
				text: '안녕하세요, 제니?',
				from: 'me'
			},
			{
				text: '안녕하세요, 민호?',
				from: 'them'
			},
			{
				text: '날씨가 좋아요!',
				from: 'me'
			}
		]);

		const sendMessage = (() => {
			console.log('sendMessage')
			messages.value.push(
				{
					text: newMessage.value,
					from: 'me'
				}
			)
			newMessage.value = ''
		})

		return {
			newMessage,
			messages,
			sendMessage
		}
	}
}
</script>

<style>
</style>
