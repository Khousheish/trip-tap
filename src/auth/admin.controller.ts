import { Controller, Get, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { GetUser } from '@Auth/get-user.decorator';
import { User } from '@Auth/user.entity';

import { Approved } from '../models/approved.model';
import { AdminService } from './admin.service';

@Controller('admin')
@UseGuards(AuthGuard())
export class AdminController {

    public constructor(
        private readonly adminService: AdminService,

    ) { }

    @Post('approve/:id')
    public async approveCustomer(
        @Param('id', ParseIntPipe) id: number,
        @GetUser() user: User,
    ): Promise<User> {

        const approvedUser: User = await this.adminService.approveCustomer(id, user);

        return approvedUser;
    }

    @Get('trip-organizers')

    // tslint:disable-next-line: prefer-function-over-method
    public async getAllTripOrganizers(
        @GetUser() user: User,
        @Query() approved: Approved,
    ): Promise<User[]> {

        return AdminService.getAllTripOrganizers(user, approved);
    }

}
