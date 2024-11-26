import {Controller, Get, Req, Post, Body} from '@nestjs/common'
import {Request} from 'express'
import { CreateCatDto } from './create-cat.dto'

@Controller('cats')
export class CatsController {
    @Post()
    create(@Body() createCatDto: CreateCatDto): string {  
        return 'This action adds a new cat'
    }

    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats'
    }
}