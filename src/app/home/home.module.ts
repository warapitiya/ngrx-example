import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './containers/home-page/home-page.component';
import {StoreModule} from '@ngrx/store';
import {effects, reducers} from './+store';
import {EffectsModule} from '@ngrx/effects';
import {PersonService} from './services/person.service';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('person', reducers),
        EffectsModule.forFeature(effects)
    ],
    declarations: [HomePageComponent],
    providers: [PersonService],
    exports: [HomePageComponent]
})
export class HomeModule {
}
