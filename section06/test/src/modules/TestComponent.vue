<template>
    <div>
        テストです
        {{ testData }}
    </div>
</template>
<script>
export default {
    name: 'TestComponent',
    data: function(){
        return {
            testData: 'テストdataです'
        }
    }
}
</script>
<style>
</style>