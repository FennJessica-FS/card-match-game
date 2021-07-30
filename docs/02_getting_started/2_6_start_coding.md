## Getting Started with Coding...  


# /.git

Before we create a Visual Studio project, it's important to understand how git keeps track of changes. When a repository is "cloned" down from GitHub (see step 2.5), it contains an invisible **.git** folder. This folder is used to track all changes inside of your local repository. It's like having a mini-database running that keeps track of every change made inside of the cloned down repository.   

<br>  

## Tracking
Let's have a look at the invisible .git folder. Click inside your repository folder on your Mac and then use this command to see any invisible files and folders it contains...

## `Shift + Command + . (period) `

![Local Repo .git Folder](https://user-images.githubusercontent.com/613813/118553192-00849680-b72e-11eb-9011-52adc33dcf7a.png)  

The invisible .git folder indicates that git is being used behind the scenes to track changes to this folder. We can refer to this folder as the "cloned down local repository". 

**Note:** It's a best practice to leave invisibility turned off. In this case, you are only temporarily turning on invisibility to confirm and see that there is actually an invisible folder. That's where git keeps track of changes behind the scenes!   

<br> 

# Using Git
To get started with coding, let's create a new project solution. Be sure to... 

1. **Leave version control unchecked** 
2. **Use the correct naming convention for the project**

See below for more informaton...

<br>


## Getting Started
**Important:** Make sure to leave version control unchecked when creating a new project. Leave the "Use Git..." option off.

Use this naming convention, separated by underscores... Course  Acronym, Year, Month, Last, and First name... `ADF_YYMM_LastFirst`   

**For example:** `ADF_2106_DoeJohn`
 
![Uncheck use Git and Naming Convention](https://user-images.githubusercontent.com/613813/119202835-a94d3180-ba5f-11eb-8df0-129f3d47a5d3.png)



<br>


## Add Project to Repository
After creating the project, drag the project folder inside of your repository folder's "dev" folder. Since the entire cloned down repository already has version control enabled (thanks to the invisible .git folder running behind the scenes), there is no need to also initialize your new coding project with version control.  
 
![Add Project to Repo](https://user-images.githubusercontent.com/613813/118561078-7ee63600-b738-11eb-87bb-bad5e24835a3.png) 

<br> 
 
# Begin Development
Congratulations on setting up version control and adding your project to the cloned down class repository. As you work on code, remember to use version control to track changes automatically. 

Here are the basic steps...

1. Work on project
2. Add changes: `git add <fileName>` or, `git add .`
3. Commit changes: `git commit -m "brief update message here"`
3. Push changes `git push`

<br>

### Best Practice 
A best practice is to add and commit often. We recommend setting a timer to remind you to do this now and then. Each time you make a change, use git to add the change, make a commit, and then push changes to your repository. In this way you can practice and get used to using the basics of version control.  
 
Feel free to explore other features of version control as you become comfortable with git. 

<br>

In the meantime... 

# Let's get coding!  ...🚀

 



 
 
 
 






