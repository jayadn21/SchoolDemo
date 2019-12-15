import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
// import {BasicLoginComponent} from './basic-login.component';
const routes: Routes = [

  // For login service start
  // { path: '', pathMatch: 'full', redirectTo: 'login'},
  // { path: 'login', component: BasicLoginComponent },
  // login service End
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth/login/simple',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: './theme/auth/auth.module#AuthModule'
      },
      {
        path: 'email/email-template',
        loadChildren: './theme/email/email-template/email-template.module#EmailTemplateModule'
      },
      {
        path: 'maintenance/offline-ui',
        loadChildren: './theme/maintenance/offline-ui/offline-ui.module#OfflineUiModule'
      },
      {
        path: 'landing',
        loadChildren: './theme/landing/landing.module#LandingModule'
      },

    ]
  },
  {
    path: '',
    component: AdminComponent,
    children: [

      // {
      // path: '',
      // redirectTo: 'dashboard/default',
      // pathMatch: 'full'
      // },
      {
        path: 'dashboard',
        loadChildren: './theme/dashboard/dashboard.module#DashboardModule'
      },

      {
        path: 'STUDENTS/students-database',
        loadChildren: './STUDENTS/students-database/students-database.module#StudentsDatabaseModule'
      },
      {
        path: 'STUDENTS/admission-enquiry',
        loadChildren: './STUDENTS/admission-enquiry/admission-enquiry.module#AdmissionEnquiryModule'
      },
      {
        path: 'STUDENTS/mark-attendance',
        loadChildren: './STUDENTS/mark-attendance/mark-attendance.module#MarkAttendanceModule'
      },
      {
        path: 'STUDENTS/student-catogery',
        loadChildren: './STUDENTS/student-catogery/student-catogery.module#StudentCatogeryModule'
      },
      {
        path: 'STUDENTS/custom-fields',
        loadChildren: './STUDENTS/custom-fields/custom-fields.module#CustomFieldsModule'
      },
      {
        path: 'STUDENTS/admission-ticket',
        loadChildren: './STUDENTS/admission-ticket/admission-ticket.module#AdmissionTicketModule'
      },
      {
        path: 'STUDENTS/students-settings',
        loadChildren: './STUDENTS/students-settings/students-settings.module#StudentsSettingsModule'
      },
      {
        path: 'Employees/manage-employees',
        loadChildren: './Employees/manage-employees/manage-employees.module#ManageEmployeesModule'
      },
      {
        path: 'GradeBook/grade-book',
        loadChildren: './GradeBook/grade-book/grade-book.module#GradeBookModule'
      },
      {
        path: 'GradeBook/consolidate-assessment',
        loadChildren: './GradeBook/consolidate-assessment/consolidate-assessment.module#ConsolidateAssessmentModule'
      },
      {
        path: 'GradeBook/assessment',
        loadChildren: './GradeBook/assessment/assessment.module#AssessmentModule'
      },
      {
        path: 'GradeBook/subject-page',
        loadChildren: './GradeBook/subject-page/subject-page.module#SubjectPageModule'
      },
      {
        path: 'GradeBook/subject-combination-mapp',
        loadChildren: './GradeBook/subject-combination-mapp/subject-combination-mapp.module#SubjectCombinationMappModule'
      },
      {
        path: 'GradeBook/assessment-head',
        loadChildren: './GradeBook/assessment-head/assessment-head.module#AssessmentHeadModule'
      },
      {
        path: 'GradeBook/assign-combination',
        loadChildren: './GradeBook/assign-combination/assign-combination.module#AssignCombinationModule'
      },
      {
        path: 'GradeBook/grades',
        loadChildren: './GradeBook/grades/grades.module#GradesModule'
      },
      {
        path: 'GradeBook/remark',
        loadChildren: './GradeBook/remark/remark.module#RemarkModule'
      },
      {
        path: 'GradeBook/consolidate-marks-card',
        loadChildren: './GradeBook/consolidate-marks-card/consolidate-marks-card.module#ConsolidateMarksCardModule'
      },
      {
        path: 'GradeBook/indicative-grade',
        loadChildren: './GradeBook/indicative-grade/indicative-grade.module#IndicativeGradeModule'
      },
      {
        path: 'OrganisationSetup/class',
        loadChildren: './OrganisationSetup/class/class.module#ClassModule'
      },
      {
        path: 'OrganisationSetup/create-user-profile',
        loadChildren: './OrganisationSetup/create-user-profile/create-user-profile.module#CreateUserProfileModule'
      },
      {
        path: 'OrganisationSetup/sub-modules',
        loadChildren: './OrganisationSetup/sub-modules/sub-modules.module#SubModulesModule'
      },
      {
        path: 'OrganisationSetup/subject-combination',
        loadChildren: './OrganisationSetup/subject-combination/subject-combination.module#SubjectCombinationModule'
      },
      {
        path: 'OrganisationSetup/facility',
        loadChildren: './OrganisationSetup/facility/facility.module#FacilityModule'
      },
      {
        path: 'OrganisationSetup/event-type',
        loadChildren: './OrganisationSetup/event-type/event-type.module#EventTypeModule'
      },
      {
        path: 'Accounting/fees-management',
        loadChildren: './Accounting/fees-management/fees-management.module#FeesManagementModule'
      },
      {
        path: 'Accounting/accounting-year',
        loadChildren: './Accounting/accounting-year/accounting-year.module#AccountingYearModule'
      },
      {
        path: 'Accounting/payment-method',
        loadChildren: './Accounting/payment-method/payment-method.module#PaymentMethodModule'
      },
      {
        path: 'Accounting/fees-accounts',
        loadChildren: './Accounting/fees-accounts/fees-accounts.module#FeesAccountsModule'
      },
      {
        path: 'Accounting/fees-headers',
        loadChildren: './Accounting/fees-headers/fees-headers.module#FeesHeadersModule'
      },
      {
        path: 'Accounting/facility-fees',
        loadChildren: './Accounting/facility-fees/facility-fees.module#FacilityFeesModule'
      },
      {
        path: 'Accounting/expense-headers',
        loadChildren: './Accounting/expense-headers/expense-headers.module#ExpenseHeadersModule'
      },
      {
        path: 'Accounting/expense-account',
        loadChildren: './Accounting/expense-account/expense-account.module#ExpenseAccountModule'
      },
      {
        path: 'Accounting/fees-template',
        loadChildren: './Accounting/fees-template/fees-template.module#FeesTemplateModule'
      },
      {
        path: 'Accounting/opening-balance',
        loadChildren: './Accounting/opening-balance/opening-balance.module#OpeningBalanceModule'
      },
      {
        path: 'Accounting/assets',
        loadChildren: './Accounting/assets/assets.module#AssetsModule'
      },
      {
        path: 'Accounting/charts',
        loadChildren: './Accounting/charts/charts.module#ChartsModule'
      },
      {
        path: 'Accounting/vendors',
        loadChildren: './Accounting/vendors/vendors.module#VendorsModule'
      },
      {
        path: 'Accounting/indirect-account',
        loadChildren: './Accounting/indirect-account/indirect-account.module#IndirectAccountModule'
      },
      {
        path: 'Accounting/expense',
        loadChildren: './Accounting/expense/expense.module#ExpenseModule'
      },
      {
        path: 'Accounting/internal-transaction',
        loadChildren: './Accounting/internal-transaction/internal-transaction.module#InternalTransactionModule'
      },
      {
        path: 'Attendance/menu',
        loadChildren: './Attendance/menu/menu.module#MenuModule'
      },
      {
        path: 'Attendance/attendance-setup',
        loadChildren: './Attendance/attendance-setup/attendance-setup.module#AttendanceSetupModule'
      },
      {
        path: 'Attendance/report-setup',
        loadChildren: './Attendance/report-setup/report-setup.module#ReportSetupModule'
      },
      {
        path: 'Attendance/view-report',
        loadChildren: './Attendance/view-report/view-report.module#ViewReportModule'
      },
      {
        path: 'Attendance/practical-classes',
        loadChildren: './Attendance/practical-classes/practical-classes.module#PracticalClassesModule'
      },
      {
        path: 'Calendar/calendar',
        loadChildren: './Calendar/calendar/calendar.module#CalendarModule'

      },
      {
        path: 'Calendar/events-calendar',
        loadChildren: './theme/extension/event-calendar/event-calendar.module#EventCalendarModule'
        // loadChildren: './Calendar/events-calendar/events-calendar.module#EventsCalendarModule'
      },
      {
        path: 'HomeWork/dairy',
        loadChildren: './HomeWork/dairy/dairy.module#DairyModule'
      },
      {
        path: 'widget',
        loadChildren: './theme/widget/widget.module#WidgetModule'
      },
      {
        path: 'basic',
        loadChildren: './theme/ui-elements/basic/basic.module#BasicModule'
      },
      {
        path: 'advance',
        loadChildren: './theme/ui-elements/advance/advance.module#AdvanceModule'
      },
      {
        path: 'animations',
        loadChildren: './theme/ui-elements/animation/animation.module#AnimationModule'
      },
      {
        path: 'forms',
        loadChildren: './theme/forms/forms.module#FormsModule'
      },
      {
        path: 'bootstrap-table',
        loadChildren: './theme/table/bootstrap-table/bootstrap-table.module#BootstrapTableModule'
      },
      {
        path: 'data-table',
        loadChildren: './theme/table/data-table/data-table.module#DataTableModule'
      },
      {
        path: 'maintenance/error',
        loadChildren: './theme/maintenance/error/error.module#ErrorModule'
      },
      {
        path: 'maintenance/coming-soon',
        loadChildren: './theme/maintenance/coming-soon/coming-soon.module#ComingSoonModule'
      },
      {
        path: 'user',
        loadChildren: './theme/user/user.module#UserModule'
      },
      {
        path: 'email',
        loadChildren: './theme/email/email.module#EmailModule'
      },
      {
        path: 'task',
        loadChildren: './theme/task/task.module#TaskModule'
      },
      {
        path: 'crm-contact',
        loadChildren: './theme/crm-contact/crm-contact.module#CrmContactModule'
      },
      {
        path: 'invoice',
        loadChildren: './theme/extension/invoice/invoice.module#InvoiceModule'
      },
      {
        path: 'file-upload-ui',
        loadChildren: './theme/extension/file-upload-ui/file-upload-ui.module#FileUploadUiModule'
      },
      {
        path: 'calendar',
        loadChildren: './theme/extension/event-calendar/event-calendar.module#EventCalendarModule'
      },
      {
        path: 'charts',
        loadChildren: './theme/chart/chart.module#ChartModule'
      },
      {
        path: 'map',
        loadChildren: './theme/map/map.module#MapModule'
      },
      {
        path: 'simple-page',
        loadChildren: './theme/simple-page/simple-page.module#SimplePageModule'
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
