<template>
  <section>
    <header-box></header-box>
    <loading-screen></loading-screen>
    <div class="fx-col fx-start-center">
      <result-list class="view-container"></result-list>
      <pagination class="view-container"></pagination>
    </div>
    <result-modal></result-modal>
    <footer-box></footer-box>
  </section>
</template>

<script>
import HeaderBox from 'components/shared/header-box'
import ResultCard from 'components/shared/result-card'
import ResultModal from 'components/shared/result-modal'
import ResultList from 'components/shared/result-list'
import Pagination from 'components/shared/pagination'
import LoadingScreen from 'components/shared/loading-screen'
import FooterBox from 'components/shared/footer-box'

export default {
  components: {
    HeaderBox,
    ResultCard,
    ResultModal,
    ResultList,
    Pagination,
    LoadingScreen,
    FooterBox
  }
}
</script>
