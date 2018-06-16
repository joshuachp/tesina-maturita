import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { IndexComponent } from './index/index.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { NotFoundComponent } from './not-found/not-found.component';
import { LinearComponent } from './linear/linear.component';
import { MnistComponent } from './mnist/mnist.component';
import { DrawableDirective } from './drawable.directive';
import { ChartComponent } from './chart/chart.component';

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        NotFoundComponent,
        LinearComponent,
        MnistComponent,
        DrawableDirective,
        ChartComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        ChartsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
