// import React from "react";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import companies from '../data/companies.json';
import Autoplay from 'embla-carousel-autoplay';
import {
  Card, CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Landing = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col justify-center items-center text-2xl font-extrabold sm:text-6xl lg:text-8xl">
          Find Your Dream Job{" "}
          <span className="flex items-center gap-2 sm:gap-4">
            and get <img src="logo.png" className="h-14 sm:h-24 lg:h-32" />
          </span>
        </h1>
        <p className="text-gray-300 text-xs sm:text-xl sm:mt-4">
          Explore the thousands of job postings or find perfect canditate
        </p>
      </section>
      <section className="flex justify-center gap-6">
        <Link to="/jobs">
          <Button variant="default" size="xl">Find Jobs</Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" size="xl">Post a Job</Button>
        </Link>
      </section>
      <section>
        <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full py-10">
          <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {companies?.map(({ name, path, id }) => {
              return (<CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img src={path} className="h-9 sm:h-14 object-contain" alt={name} />
              </CarouselItem>);
            })}
          </CarouselContent>
        </Carousel>
      </section>
      <section className="flex ">
        <Card className="">
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications and more...
          </CardContent>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post Jobs, manage applications and find the best candidates.
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Landing;
