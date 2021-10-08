const GET_MAGAZINES = `
query{
  allMagazines(_size: 100){
    data{
      title
      volume
      page
      date
      author
      language
      type
      pdf
    }
  }
}`;

module.exports = {
    GET_MAGAZINES
};