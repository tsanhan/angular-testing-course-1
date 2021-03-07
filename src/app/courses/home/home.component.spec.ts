import { CoursesService } from './../services/courses.service';
import { waitForAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { CoursesModule } from './../courses.module';

// import {CoursesModule} from '../courses.module';
import {DebugElement} from '@angular/core';

import {HomeComponent} from './home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { setupCourses } from '../common/setup-test-data';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
// import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
// import {CoursesService} from '../services/courses.service';
// import {HttpClient} from '@angular/common/http';
// import {COURSES} from '../../../../server/db-data';
// import {setupCourses} from '../common/setup-test-data';
// import {By} from '@angular/platform-browser';
// import {of} from 'rxjs';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
// import {click} from '../common/test-utils';




describe('HomeComponent', () => {

  let fixture: ComponentFixture<HomeComponent>;
  let component:HomeComponent;
  let el: DebugElement;
  let coursesService: any;

  const beginnerCourses = setupCourses().filter(c => c.category === 'BEGINNER');

  const coursesServiceSpy = jasmine.createSpyObj('CoursesService', ['findAllCourses']);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports:[
        CoursesModule,
        NoopAnimationsModule // fake animation module
      ],
      providers:[
        {
          provide: CoursesService,
          useValue: coursesServiceSpy
        }
      ]
    }).compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      coursesService = TestBed.inject(CoursesService);

    });

  }));

  it("should create the component", () => {

    expect(component).toBeTruthy();

  });


  it("should display only beginner courses", () => {

    coursesService.findAllCourses.and.returnValue(of(beginnerCourses));
    fixture.detectChanges();

    const tabs = el.queryAll(By.css('.mat-tab-label'));
    expect(tabs.length).toBe(1, "unexpected number of tab found")
  });


  it("should display only advanced courses", () => {

      pending();

  });


  it("should display both tabs", () => {

    pending();

  });


  it("should display advanced courses when tab clicked", () => {

    pending();

  });

});


