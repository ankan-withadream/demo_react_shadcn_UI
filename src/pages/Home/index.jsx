import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Search,
} from "lucide-react"
import { Input } from "@/components/ui/input"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

import Events from "../../components/events"

const Home = () => {
  return (
    <>
      <Card className="flex items-center">
        <CardHeader>
          <CardTitle>Create Events</CardTitle>
          <CardDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ab assumenda veniam accusamus, architecto est sint quisquam sapiente laboriosam tempore corporis consequuntur, nisi nemo asperiores repellendus, rem quidem aperiam exercitationem ducimus quod!loren16
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex justify-between">

          <Button>Create Event</Button>
        </CardFooter>
      </Card>


      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Your Events</h1>
      </div>

      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="archived" className="hidden sm:flex">
              Archived
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search events by name or tags"
                  className="w-full appearance-none bg-background pl-8 shadow-none"
                />
              </div>
            </form>
          </div>

        </div>

        <TabsContent value="all">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>
                Manage your products and view their sales performance.
              </CardDescription>
            </CardHeader>

            <CardContent>

              <Card className="w-full">


                <ScrollArea className="h-[500px] w-full rounded-md  p-4">
                  <Events />
                  <Events />
                  <Events />


                </ScrollArea>



              </Card>
            </CardContent>

            <CardFooter>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardFooter>
          </Card>
        </TabsContent>
        
      </Tabs>


    </>
  )
}

export default Home