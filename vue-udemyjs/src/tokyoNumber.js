export const tokyoNumber = {
  data(){
    return {
      title: "Hello",
      subtitle: "World",
      number: 0
    }
  },
  filters: {
    lowerCase(value){
      return value.toLowerCase();
    }
  }
}
