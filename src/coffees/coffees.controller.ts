import { Body, Controller, Request, Delete, Get, Inject, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { REQUEST } from '@nestjs/core';


@Controller('coffees')
export class CoffeesController {
    constructor(
        private readonly coffeeService: CoffeesService,
        @Inject(REQUEST) private readonly request: Request
    ) {
        console.log('CoffeeController instantiated');
    }

    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto) {
        return this.coffeeService.findAll(paginationQuery);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        console.log(typeof id);
        return this.coffeeService.findOne('' + id);
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        console.log(createCoffeeDto instanceof CreateCoffeeDto);
        return this.coffeeService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body(ValidationPipe) updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeeService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeeService.remove(id);
    }
}
