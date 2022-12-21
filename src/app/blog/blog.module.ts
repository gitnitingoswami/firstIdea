import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { BlogingRoutingModule } from './bloging-routing.module';



@NgModule({
  declarations: [
    CreateBlogComponent
  ],
  imports: [
    CommonModule,
    BlogingRoutingModule
  ]
})
export class BlogModule { }
