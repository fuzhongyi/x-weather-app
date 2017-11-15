import {Pipe, PipeTransform} from '@angular/core';

/**
 * Generated class for the IconFormatPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'iconFormat',
})
export class IconFormatPipe implements PipeTransform {

  describe: Object = {
    "多云": "icon-icon-test1",
    "少云": "icon-icon-test",
    "晴": "icon-sun",
    "阴": "icon-yintian",
    "小雨": "icon-icon-test3",
    "雨": "icon-icon-test4",
    "雷阵雨": "icon-icon-test5",
    "中雨": "icon-icon-test2",
    "阵雨": "icon-icon-test4",
    "零散阵雨": "icon-icon-test8",
    "零散雷雨": "icon-icon-test7",
    "小雪": "icon-icon-test9",
    "雨夹雪": "icon-icon-test11",
    "阵雪": "icon-icon-test15",
    "霾": "icon-icon-test17",
    "运动": "icon-yundong",
    "日出": "icon-tianqi-richu",
    "日落": "icon-tianqi-rila",
    "穿衣指数": "icon-chuanyizhishu",
    "感冒指数": "icon-ganmaozhishu",
    "风向": "icon-fengxiang",
    "空气质量": "icon-huanjingxinxi-"
  };

  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    let icon: string = this.describe[value];
    if (!icon) {
      icon = "icon-icon-test22";
    }
    return icon;
  }
}
