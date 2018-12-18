import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EsBlogModule } from './blog/blog.module';
import { EsEntryModule } from './entry/entry.module';
import { EsTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        EsBlogModule,
        EsEntryModule,
        EsTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EsEntityModule {}
