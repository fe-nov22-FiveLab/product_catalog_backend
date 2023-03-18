import {
  DataType,
  Table,
  Model,
  PrimaryKey,
  AllowNull,
  Column
} from 'sequelize-typescript';

interface Description {
  title: string
  text: string[]
}

@Table({
  tableName: 'phonesDetails',
  createdAt: false,
  updatedAt: false
})
export class PhoneDetail extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    id: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    namespaceId: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    name: string;

  @AllowNull(false)
  @Column({
    type: DataType.ARRAY(DataType.STRING)
  })
    capacityAvailable: string[];

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    capacity: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER
  })
    priceRegular: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER
  })
    priceDiscount: number;

  @AllowNull(false)
  @Column({
    type: DataType.ARRAY(DataType.STRING)
  })
    colorsAvailable: string[];

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    color: string;

  @AllowNull(false)
  @Column({
    type: DataType.ARRAY(DataType.STRING)
  })
    images: string[];

  @AllowNull(false)
  @Column({
    type: DataType.JSON
  })
    description: Description[];

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    screen: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    resolution: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    processor: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    ram: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    camera: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    zoom: string;

  @AllowNull(false)
  @Column({
    type: DataType.ARRAY(DataType.STRING)
  })
    cell: string[];
}
