import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// class
import { Animal } from '../../../model/animal/animal.model';

// enum
import { Sex } from '../../../enum/sex.enum';

// const
import { appRoutePaths } from './../../../constant/app-route-paths.const';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  /**
   * 全站路由定義檔案
   *
   * @memberof CardListComponent
   */
  appRoutePaths = appRoutePaths;

  /**
   * 從外部進來的寵物資料
   *
   * @type {Animal[]}
   * @memberof CardListComponent
   */
  @Input() animals: Animal[] = [];

  /**
   *  傳出點擊的照片
   *
   * @memberof CardListComponent
   */
  @Output() clickPicture = new EventEmitter();

  /**
   * 性別 enum
   *
   * @memberof CardListComponent
   */
  sex = Sex;

  constructor() { }

  ngOnInit() {
  }

}
