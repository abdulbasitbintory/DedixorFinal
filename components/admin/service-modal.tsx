"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { IconPicker } from "@/components/icon-picker"
import type { AdminService } from "@/types/admin"

const serviceFormSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  description: z.string().max(500).optional(),
  icon: z.string().max(100).optional(),
  details: z.array(z.string()).optional(),
  pricing: z.string().max(255).optional(),
  gradient: z.string().max(255).optional(),
  featured: z.boolean().optional().default(false),
})

type ServiceFormValues = z.infer<typeof serviceFormSchema>

interface ServiceModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  service?: AdminService
  onSave: (service: AdminService) => void
}

export function ServiceModal({ open, onOpenChange, service, onSave }: ServiceModalProps) {
  const [detailInput, setDetailInput] = useState("")
  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: {
      title: "",
      description: "",
      icon: "",
      details: [],
      pricing: "",
      gradient: "",
      featured: false,
    },
  })

  useEffect(() => {
    if (service) {
      form.reset({
        title: service.title,
        description: service.description || "",
        icon: service.icon || "",
        details: service.details || [],
        pricing: service.pricing || "",
        gradient: service.gradient || "",
        featured: service.featured || false,
      })
    } else {
      form.reset({
        title: "",
        description: "",
        icon: "",
        details: [],
        pricing: "",
        gradient: "",
        featured: false,
      })
    }
  }, [service, form])

  const onSubmit = (values: ServiceFormValues) => {
    onSave({
      id: service?.id || 0,
      title: values.title,
      description: values.description || null,
      icon: values.icon || null,
      details: values.details || null,
      pricing: values.pricing || null,
      gradient: values.gradient || null,
      featured: values.featured || false,
    })
  }

  const addDetail = () => {
    if (detailInput.trim()) {
      const currentDetails = form.getValues("details") || []
      if (!currentDetails.includes(detailInput.trim())) {
        form.setValue("details", [...currentDetails, detailInput.trim()])
      }
      setDetailInput("")
    }
  }

  const removeDetail = (detail: string) => {
    const currentDetails = form.getValues("details") || []
    form.setValue(
      "details",
      currentDetails.filter((d) => d !== detail),
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{service ? "Edit Service" : "Create Service"}</DialogTitle>
          <DialogDescription>
            {service ? "Update your service details below." : "Add a new service to your offerings."}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Service title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your service" className="resize-none" rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Details */}
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Details</FormLabel>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a service detail"
                        value={detailInput}
                        onChange={(e) => setDetailInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault()
                            addDetail()
                          }
                        }}
                      />
                      <Button type="button" onClick={addDetail} size="sm">
                        Add
                      </Button>
                    </div>
                    {field.value && field.value.length > 0 && (
                      <div className="space-y-2">
                        {field.value.map((detail, index) => (
                          <div key={index} className="flex items-center justify-between bg-muted p-2 rounded">
                            <span className="text-sm">{detail}</span>
                            <button
                              type="button"
                              onClick={() => removeDetail(detail)}
                              className="text-destructive text-sm hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Icon Picker */}
            <FormField
              control={form.control}
              name="icon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Icon</FormLabel>
                  <FormControl>
                    <IconPicker value={field.value || ""} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Pricing */}
            <FormField
              control={form.control}
              name="pricing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pricing</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Starting at $5,000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Gradient */}
            <FormField
              control={form.control}
              name="gradient"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gradient</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., from-blue-500/20 via-cyan-500/20 to-teal-500/20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Featured */}
            <FormField
              control={form.control}
              name="featured"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="font-normal">Featured Service</FormLabel>
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit">{service ? "Update" : "Create"}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
