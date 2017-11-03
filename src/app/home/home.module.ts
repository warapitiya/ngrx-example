import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './containers/home-page/home-page.component';
import {StoreModule} from '@ngrx/store';
import {personReducer} from './+store/reducers/person';
import {EffectsModule} from '@ngrx/effects';
import {PersonEffects} from './+store/effects/person.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('person', personReducer),
        // EffectsModule.forFeature([PersonEffects])
    ],
    declarations: [HomePageComponent],
    exports: [HomePageComponent]
})
export class HomeModule {
}
