import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity({name: 'product_images'})
export class ProductImage {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", nullable: false})
    url: string;

    @ManyToOne(
        () => Product,
        ( product ) => product.images,
        {onDelete: 'CASCADE'}
    )
    product: Product
}