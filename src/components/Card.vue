<template>
  <div class="card">
    <span class="name">{{name}}</span>
    <span class="amount">{{amount}}</span>
  </div>
</template>

<script>
export default {
  props: ['name', 'amount'],
};
</script>
<style scoped>
.card {
  background-color: rgb(48, 35, 122);
  color: rgb(253, 254, 255);
  margin: 0.8rem;
  height: 2.88rem;
  border-radius: 48%;
  font-size: 1.08rem;
  padding: 0.58rem;
  font-weight: 400;
  display: flex;
  align-items: center;
}
.card .name {
  margin-left: 2rem;
}
.card .amount {
  margin: 1rem;
  padding: 0rem;
  height: 2.28rem;
  width: 2.28rem;
  border-radius: 50%;
  background-color: rgb(248, 248, 250);
  line-height: 2rem;
  text-align: center;
  margin-left: 0.5rem;
  color: rgb(48, 35, 122);
}
</style>