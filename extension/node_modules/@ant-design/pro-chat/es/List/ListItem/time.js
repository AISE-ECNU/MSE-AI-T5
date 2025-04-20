import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
export var getChatItemTime = function getChatItemTime(updateAt) {
  var time = dayjs(updateAt);
  var diff = dayjs().day() - time.day();
  if (time.isSame(dayjs(), 'day')) return time.format('HH:mm');
  if (diff === 1) return '昨天';
  return time.format('MM-DD');
};