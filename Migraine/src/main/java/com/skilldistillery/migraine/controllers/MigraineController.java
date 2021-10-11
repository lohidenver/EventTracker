package com.skilldistillery.migraine.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.migraine.entities.Migraine;
import com.skilldistillery.migraine.services.MigraineService;

@RestController
@RequestMapping("api")
public class MigraineController {

	@Autowired
	private MigraineService svc;

	@GetMapping("migraine")
	public List<Migraine> index() {
		return svc.allMigraines();
	}
	
	//CRUD - CREATE
	@PostMapping("migraine")
    public Migraine addMigraine(@RequestBody Migraine migraine, HttpServletRequest req, HttpServletResponse resp) {
		migraine = svc.create(migraine);
        if (migraine != null) {
            resp.setStatus(201);
            StringBuffer sb = req.getRequestURL();
            sb.append("/").append(migraine.getId());
            resp.addHeader("Location", sb.toString());
        }
        return migraine;
    }
	
	//CRUD - READ
	@RequestMapping(path="migraine/{id}", method=RequestMethod.GET)
	 public Migraine show(@PathVariable int id, HttpServletResponse resp){
		if (svc.findById(id) != null ) {
	   return svc.findById(id);
		} else {
			resp.setStatus(404);
		return null;
		}
	 }
	
	//CRUD - DELETE
	 @DeleteMapping("migraine/{id}")
	    public void deleteComment(@PathVariable("id") Integer id, HttpServletResponse resp) {
	       
	        if (svc.findById(id) != null) {
	        	svc.deleteById(id);
	        	resp.setStatus(204);
	            }
	    }
	 
	 //CRUD - UPDATE
	 @PutMapping("migraine/{id}")
	  @ResponseBody
	  public Migraine updateMigraine(@PathVariable Integer id, 
			  @RequestBody Migraine migraine, HttpServletRequest req,
				 HttpServletResponse resp) {
		
		return svc.updateMigraine(id, migraine); 
	}
	
}//End Class

