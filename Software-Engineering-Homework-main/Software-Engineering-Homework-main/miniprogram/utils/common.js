const news = [
  {
    id: '1',
  title: '姐妹清深！短道速滑名帅帮郎平买冰墩墩\n',
  poster: '/images/swiper1.jpg',
  add_date: '2022-02-28',
  content: '姐妹清深！短道速滑名帅帮郎平买冰墩墩，特意请冠军们签名后相赠'
  },
  {
    id: '2',
  title: '发长文+中文说谢谢！千金致敬北京冬奥会\n',
  poster: '/images/swiper2.jpg',
  add_date: '2022-02-22',
  content: '发长文+中文说谢谢！千金致敬北京冬奥会，网友：中俄友谊长存'
  },
  {
    id: '3',
  title: '精彩永不落幕！北京冬奥闭幕式这些亮点值得回味\n',
  poster: '/images/swiper3.jpg',
  add_date: '2022-02-20',
  content: '精彩永不落幕！北京冬奥闭幕式这些亮点值得回味'

  }
]

//获取新闻列表
function getNewList()
{
  let list = [];
  for( var i = 0; i < news.length; i++){
    let obj = {};
    obj.id = news[i].id;
    obj.poster = news[i].poster;
    obj.content = news[i].content;
    obj.add_date = news[i].add_date;
    obj.title = news[i].title;
    list.push(obj);
  }
  return list;
}

//获取新闻内容
function getNewsDetail(newsID)
{
  let message = {
    code:'404',
    news:{}
  };
  for( var i = 0; i < news.length; i++){
    if( newsID == news[i].id ){
      message.code = '200',
      message.news = news[i];
      break;
    }
  }
  return message;
}

module.exports = {
  getNewList:getNewList,
  getNewsDetail:getNewsDetail
}