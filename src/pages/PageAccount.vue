<template>
  <page>
    <page-header>
      
      <template #title>사용자설정</template>
      
    </page-header>
    <page-body>      
        <q-list bordered padding>
            <q-item-label header>내 소개</q-item-label>

            <q-item clickable v-ripple>
                <q-item-section>
                <q-item-label>내 정보 소개</q-item-label>
                <q-item-label caption>
                    간략한 프로필 등
                </q-item-label>
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section>
                <q-item-label>Password</q-item-label>
                <q-item-label caption>
                    패스워드 변경 등
                </q-item-label>
                </q-item-section>
            </q-item>
            
        

            <q-separator spaced />

            <q-item-label header>일반</q-item-label>

			<q-item clickable v-ripple>
				<q-item-section>
				<q-item-label>초기화</q-item-label>
				<q-item-label caption>
					모든 정보를 초기화 합니다.
				</q-item-label>
				</q-item-section>
            </q-item>
			<q-item clickable v-ripple>
				<q-item-section>
				<q-item-label>로그아웃</q-item-label>
				<q-item-label caption>
					로그 아웃 처리 됩니다.
				</q-item-label>
				</q-item-section>
            </q-item>

            
        </q-list>
    </page-body>
  </page>
</template>
<script>
export default {
    setup() {
        return { 

        }
    },
}
</script>
