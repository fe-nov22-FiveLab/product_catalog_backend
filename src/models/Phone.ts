import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { Category } from './Category';

@Table({
  tableName: 'phones',
  createdAt: false,
  updatedAt: false
})
export class Phone extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER
  })
    id: number;

  @AllowNull(false)
  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER
  })
    categoryId: number;

  @BelongsTo(() => Category)
    category: Category | null;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    phoneId: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    itemId: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    name: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER
  })
    fullPrice: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER
  })
    price: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    screen: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    capacity: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    color: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    ram: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER
  })
    year: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    image: string;
}
