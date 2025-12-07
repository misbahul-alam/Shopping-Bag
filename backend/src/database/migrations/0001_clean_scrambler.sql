ALTER TABLE "products" RENAME COLUMN "salling_price" TO "selling_price";--> statement-breakpoint
CREATE INDEX "cart_items_user_product_index" ON "cart_items" USING btree ("user_id","product_id");--> statement-breakpoint
CREATE INDEX "categories_slug_index" ON "categories" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "categories_parent_id_index" ON "categories" USING btree ("parent_id");--> statement-breakpoint
CREATE INDEX "order_items_order_id_index" ON "order_items" USING btree ("order_id");--> statement-breakpoint
CREATE INDEX "order_items_product_id_index" ON "order_items" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX "orders_user_id_index" ON "orders" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "orders_status_index" ON "orders" USING btree ("status");--> statement-breakpoint
CREATE INDEX "orders_user_created_at_index" ON "orders" USING btree ("user_id","created_at");--> statement-breakpoint
CREATE INDEX "product_images_product_id_idx" ON "product_images" USING btree ("product_id");--> statement-breakpoint
CREATE UNIQUE INDEX "products_slug_index" ON "products" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "products_category_id_index" ON "products" USING btree ("category_id");--> statement-breakpoint
CREATE INDEX "products_is_featured_index" ON "products" USING btree ("is_featured");--> statement-breakpoint
CREATE UNIQUE INDEX "reviews_user_product_index" ON "reviews" USING btree ("user_id","product_id");--> statement-breakpoint
CREATE INDEX "reviews_product_index" ON "reviews" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX "reviews_user_index" ON "reviews" USING btree ("user_id");--> statement-breakpoint
CREATE UNIQUE INDEX "users_email_index" ON "users" USING btree ("email");--> statement-breakpoint
CREATE INDEX "users_role_index" ON "users" USING btree ("role");