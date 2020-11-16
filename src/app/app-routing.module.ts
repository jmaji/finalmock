import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { BidderloginComponent } from './bidderlogin/bidderlogin.component';
import { BiddersignupComponent } from './biddersignup/biddersignup.component';
import { BiddingComponent } from './bidding/bidding.component';
import { BidhomeComponent } from './bidhome/bidhome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { FgpassComponent } from './fgpass/fgpass.component';
import { ListComponent } from './list/list.component';
import { ScheduleeditComponent } from './scheduleedit/scheduleedit.component';
import { SchedulelistComponent } from './schedulelist/schedulelist.component';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';

const routes: Routes = [{​​​​​path:"",redirectTo:'/dashboard','pathMatch':'full'
}​​​​​,{​​​​​path:"dashboard",component:DashboardComponent}​​​​​,
{path:"admin",component:AdminComponent},
{path:"bidderlogin",component:BidderloginComponent},
{path:"biddersignup",component:BiddersignupComponent},
{path:"adminhome",component:AdminhomeComponent},
{path:"list",component:ListComponent},
{path:"delete",component:DeleteComponent},
{path:"details",component:DetailsComponent},
{path:"bidding",component:BiddingComponent},
{path:"fgpass",component:FgpassComponent},
{path:"bidhome",component:BidhomeComponent},
{path:"schedulelist",component:SchedulelistComponent},
{path:"scheduleedit",component:ScheduleeditComponent},
{path:"teamdetails",component:TeamdetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
