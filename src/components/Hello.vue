<style scoped lang="scss">
</style>

<template>
  <section>
    <header-box></header-box>
    <div class="fx-col fx-start-center">
      <result-list class="view-container"></result-list>
      <pagination class="view-container"></pagination>
    </div>
    <result-modal></result-modal>
  </section>
</template>

<script>
import HeaderBox from 'components/shared/header-box'
import ResultCard from 'components/shared/result-card'
import ResultModal from 'components/shared/result-modal'
import ResultList from 'components/shared/result-list'
import Pagination from 'components/shared/pagination'

export default {
  name: 'hello',
  components: {
    HeaderBox,
    ResultCard,
    ResultModal,
    ResultList,
    Pagination
  }
}
</script>
