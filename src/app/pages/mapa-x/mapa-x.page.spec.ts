import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaXPage } from './mapa-x.page';

describe('MapaXPage', () => {
  let component: MapaXPage;
  let fixture: ComponentFixture<MapaXPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MapaXPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
